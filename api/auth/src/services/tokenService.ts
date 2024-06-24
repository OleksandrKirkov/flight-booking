import jwt from "jsonwebtoken";
import tokenModel from "../models/tokenModel";
import {ACCESS_TOKEN_EXPIRATION, REFRESH_TOKEN_EXPIRATION} from "../../constants"

class TokenService {
    generateToken(payload: string | object) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_EXPIRATION})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_EXPIRATION})

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

            return userData;
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)

            return userData;
        } catch (e) {
            return null
        }
    }

    async saveToken(userId: number, refreshToken: string) {
        const tokenData = await tokenModel.findOne({user: userId})

        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await tokenModel.create({user: userId, refreshToken})
        return token;
    }

    async removeToken(refreshToken: string) {
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData;
    }

    async findToken(refreshToken: string) {
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData;
    }
}

export default new TokenService();

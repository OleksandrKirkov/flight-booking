import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import tokenService from "./tokenService";
import { IUser, UserDTO } from "../dtos/userDTO";
import { ApiError } from "../exceptions/apiError";

class userService {
    async registration(email: string, password: string) {
        const candidate = await userModel.findOne({email})

        if(candidate) {
            throw ApiError.BadRequest(`Користувач з поштовою скринькою ${email} ужу існує!`)
        }

        const hashPassword = await bcrypt.hash(password, 3)

        const user = await userModel.create({email, password: hashPassword})
        
        const userDTO = new UserDTO(user)
        const tokens = tokenService.generateToken({...userDTO})
        await tokenService.saveToken(userDTO.id, tokens.refreshToken)

        return {...tokens, user: userDTO}
    }

    async login(email: string, password: string) {
        const user: IUser = await userModel.findOne({email})

        if(!user) {
            throw ApiError.BadRequest('Користувач з такою електронною поштою не знайдений!');
        }

        const isPassEquals = await bcrypt.compare(password, user.password);

        if(!isPassEquals) {
            throw ApiError.BadRequest('Невірний пароль!');
        }

        const userDTO = new UserDTO(user);
        const tokens = tokenService.generateToken({...userDTO})

        await tokenService.saveToken(userDTO.id, tokens.refreshToken)
        return  {...tokens, user: UserDTO}
    }

    async logout(refreshToken: string) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken: string) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData: any = tokenService.validateRefreshToken(refreshToken)
        const tokenFromOb = await tokenService.findToken(refreshToken)

        if(!userData || !tokenFromOb) {
            throw ApiError.UnauthorizedError()
        }

        const user: IUser = await userModel.findById(userData.id)
        const userDTO = new UserDTO(user)
        const tokens = tokenService.generateToken({...userDTO})

        await tokenService.saveToken(userDTO.id, tokens.refreshToken)
        return {...tokens, user: userDTO.id}
    }

    async getAllUser() {
        const users = await userModel.find();
        return users
    }
}

export default new userService()

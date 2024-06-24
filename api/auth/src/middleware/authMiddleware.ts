import {ApiError} from "../exceptions/apiError";
import {Request, Response, NextFunction} from "express";
import tokenService from "../services/tokenService";

interface RequestWithUser extends Request {
    user?: any;
}

export default function (req: RequestWithUser, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if(!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if(!accessToken) {
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData

        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}

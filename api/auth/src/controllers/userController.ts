import userService from "services/userService";
import {validationResult} from "express-validator";
import { ApiError } from "exceptions/apiError";
import {NextFunction, Request, Response} from "express";
import {COOKIE_SETTINGS} from "../../constants";

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Помилка при валідації ', errors.array()))
            }
            const {email, password} = req.body
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN)

            return res.json(userData)
        } catch (e) {
            next(e);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN)
            
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')

            return res.json(token)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN)

            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUser()

            return res.json(users);
        } catch (e) {
            next(e)
        }
    }
}

export default new UserController

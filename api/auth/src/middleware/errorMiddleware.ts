import {ApiError} from "../exceptions/apiError";
import {Request, Response, NextFunction, ErrorRequestHandler} from "express";

export default function (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    console.log(err)

    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    return res.status(500).json({message: 'Непередбачувана помилка', err})
}

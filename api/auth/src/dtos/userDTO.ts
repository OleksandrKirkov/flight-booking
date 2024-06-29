import mongoose from "mongoose"

export interface IUser {
    _id: mongoose.Types.ObjectId
    email: string
    password: string
}

export class UserDTO {
    email: string
    id: mongoose.Types.ObjectId

    constructor(model: IUser) {
        this.email = model.email;
        this.id = model._id;
    }
}

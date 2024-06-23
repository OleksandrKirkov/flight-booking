export interface IUser {
    _id: number
    email: string
    password: string
}

export class UserDTO {
    email: string
    id: number

    constructor(model: IUser) {
        this.email = model.email;
        this.id = model._id;
    }
}

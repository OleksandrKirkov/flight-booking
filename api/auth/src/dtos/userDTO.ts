export interface IUser {
    _id: string
    email: string
    password: string
}

export class UserDTO {
    email: string
    id: string

    constructor(model: IUser) {
        this.email = model.email;
        this.id = model._id;
    }
}

import {IUser} from 'dtos/userDTO'
import {Schema, model} from 'mongoose'

const UserShema = new Schema<IUser>({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
})

export default model('User', UserShema)

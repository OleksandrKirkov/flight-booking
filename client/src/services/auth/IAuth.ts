export interface IUser {
    email: string
    id: string    
}

export interface ISignIn {
    email: string
    login: string
    password: string
}

export interface ISignUp {
    email: string
    password: string
}

export interface ISignUpResult {
    accessToken: string
    refreshToken: string
    user: IUser 
}

export interface ISignInResult {
    accessToken: string
    refreshToken: string
}

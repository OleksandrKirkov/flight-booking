export interface IAuthInput {
    email: string,
    login: string,
    password: string,
    confPassword: string
}

export interface IAuthField {
    name: keyof IAuthInput,
    type: string,
    options: {
        required: string,
        pattern?: {
            value: RegExp,
            message: string
        }
    },
    placeholder: string
}

export const signUpFields: IAuthField[] = [
    {
        name: "email",
        type: "email",
        options: {
            required: 'Email is required',
            pattern: {
                value: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
                message: 'Please enter a valid email address'
            }
        },
        placeholder: "Email",
    },
    {
        name: "login",
        type: "text",
        options: {
            required: 'Login is required',
            pattern: {
                value: /^\w+$/,
                message: 'Please enter a valid login'
            }
        },
        placeholder: "Login",
    },
    {
        name: "password",
        type: "password",
        options: {
            required: 'Password is required',
            pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,20}$/,
                message: 'Please enter a valid password'
            }
        },
        placeholder: "Password",
    },
    {
        name: "confPassword",
        type: "password",
        options: {
            required: 'Password is required',
        },
        placeholder: "Password",
    },
]

export const signInField: IAuthField[] = [
    {
        name: "email",
        type: "email",
        options: {
            required: 'Email is required'
        },
        placeholder: "Email"
    },
    {
        name: "password",
        type: "password",
        options: {
            required: "Password is required"
        },
        placeholder: "Password"
    }
]

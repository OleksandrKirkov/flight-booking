import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {ISignIn, IUser} from "../../../services/auth/IAuth";
import {RootState} from "../store";

interface IAuthState {
    token: string | null;
    user: IUser;
}

const initialState: IAuthState = {} as IAuthState

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{token: string; user: IUser}>) => {
            const {token, user} = action.payload
            state.token = token
            state.user = user
        },
        logout: (state) => {
            state.token = null
            state.user = {} as IUser
        }
    }
})

export const { setCredentials, logout } = authSlice.actions

export const authResult = (state: RootState) => state.auth

export default authSlice.reducer

import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {ISignIn, IUser} from "../../../services/auth/IAuth";
import {RootState} from "../store";
import {useLoginMutation} from "../../../services/auth/auth";

const initialState: IUser = {} as IUser

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<IUser>) => {
            return action.payload
        },
    }
})

export const { updateUser } = authSlice.actions

export const authResult = (state: RootState) => state.auth

export default authSlice.reducer

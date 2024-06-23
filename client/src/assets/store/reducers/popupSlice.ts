import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store"

export interface IPopup {
    signIn: boolean,
    signUp: boolean
}

const initialState:IPopup = {
    signIn: false,
    signUp: false
} 

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<keyof IPopup>) => {
            state[action.payload] = true
        },

        closePopup: (state, action: PayloadAction<keyof IPopup>) => {
            state[action.payload] = false
        }
    }
})

export const { openPopup, closePopup } = popupSlice.actions

export const getPopupState = (state: RootState, popupName: keyof IPopup) => state.popup[popupName]

export default popupSlice.reducer

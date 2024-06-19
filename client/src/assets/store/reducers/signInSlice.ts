import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../store"

interface IPopup {
    popupState: boolean
}

const initialState:IPopup = {
    popupState: false
} 

export const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        openPopup: (state) => {
            state.popupState = true
        },

        closePopup: (state) => {
            state.popupState = false
        }
    }
})

export const { openPopup, closePopup } = signInSlice.actions

export const getPopupState = (state: RootState) => state.signIn.popupState

export default signInSlice.reducer

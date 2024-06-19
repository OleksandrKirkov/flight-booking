import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {IFlight} from "../../../services/flight/IFlight";

const initialState: IFlight[] = []

export const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        updateFlight: (state, action: PayloadAction<IFlight[]>) => {
            return action.payload            
        }
    }
})

export const { updateFlight } = flightSlice.actions

export default flightSlice.reducer

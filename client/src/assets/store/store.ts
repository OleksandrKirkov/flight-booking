import {configureStore} from "@reduxjs/toolkit";
import {flightApi} from "../../services/flight/flight";
import {setupListeners} from "@reduxjs/toolkit/query";
import flightReducer from "./reducers/flightSlice"
import signInReducer from "./reducers/signInSlice"

export const store = configureStore({
    reducer: {
        [flightApi.reducerPath]: flightApi.reducer,
        flight: flightReducer,
        signIn: signInReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(flightApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

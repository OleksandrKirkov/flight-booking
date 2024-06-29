import {configureStore} from "@reduxjs/toolkit";
import {flightApi} from "../../services/flight/flight";
import {setupListeners} from "@reduxjs/toolkit/query";
import flightReducer from "./reducers/flightSlice"
import popupReducer from "./reducers/popupSlice"
import authReducer from "./reducers/authSlice"
import {authApi} from "../../services/auth/auth";

export const store = configureStore({
    reducer: {
        [flightApi.reducerPath]: flightApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        flight: flightReducer,
        auth: authReducer,
        popup: popupReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(flightApi.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

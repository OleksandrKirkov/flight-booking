import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {createApi} from "@reduxjs/toolkit/query";
import {ISignIn, IUser} from "./IAuth";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/auth'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        login: builder.mutation<IUser, ISignIn>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            }),
            transformResponse: (response: {result: number; user: IUser}) => {
                return response.user
            }
        }),

        //register

        //logout
    })
})

export const {
    
} = authApi;

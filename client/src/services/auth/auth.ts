import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {ISignIn, ISignInResult, ISignUp, ISignUpResult, IUser} from "./IAuth";
import {RootState} from "../../assets/store/store";
import authSlice, {logout, setCredentials} from "../../assets/store/reducers/authSlice";
import {useAppDispatch} from "../../assets/hooks/useRedux";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/auth',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers;
   },
   credentials: 'include'
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log('return => ', result)

    if(result?.error?.status === 403) {
        console.log('sending refresh token...')
        
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log('refreshResult => ', refreshResult)
        
        if(refreshResult?.data) {
            const {accessToken, user} = refreshResult.data as {accessToken: string, user: IUser}
            
            api.dispatch(setCredentials({
                token: accessToken,
                user: user,
            }))

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout())
        }
    }

    return result
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        //login
        login: builder.mutation<ISignInResult, ISignIn>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            }),
        }),
            //transformResponse: (response: {result: number; user: ISignInResult}) => {
                //return response.user } }),
        //register
        register: builder.mutation<ISignUpResult, ISignUp>({
            query: (data) => ({
                url: 'registration',
                method: 'POST',
                body: data
            }),
            //transformResponse: (response: {result: number; user: ISignUpResult}) => {
                //return response.user
            //}
        }),
        //logout
        logout: builder.mutation<void, void>({
            query: () => {
                return {
                    url: 'logout',
                    method: 'POST'
                }
            },
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;

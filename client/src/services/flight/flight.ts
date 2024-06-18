import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFlight} from "./IFlight";

export const flightApi = createApi({
    reducerPath: "flightApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        getFlight: builder.query<IFlight[], string>({
            query: () => ({
                url: 'flight/'
            }),
        })
    }) 
})

export const {useGetFlightQuery} = flightApi

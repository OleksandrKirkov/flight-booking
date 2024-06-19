import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFlight, ISearchFlight} from "./IFlight";

export const flightApi = createApi({
    reducerPath: "flightApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        searchFlight: builder.query<IFlight[], ISearchFlight>({
            query: (data) => ({
                url: 'search-flight',
                body: data,
                method: 'POST'
            }),
            transformResponse: (response: {data: IFlight[]}, meta, arg) => response.data
        })
    }) 
})

export const {useSearchFlightQuery} = flightApi

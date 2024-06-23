import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFlight, ISearchFlight} from "./IFlight";

export const flightApi = createApi({
    reducerPath: "flightApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        searchFlight: builder.query<IFlight[], ISearchFlight>({
            query: (data) => {
                const baseUrl = 'search-flight'

                const queryParams = new URLSearchParams(data as any).toString()

                return {
                    url: `${baseUrl}?${queryParams}`,
                }
            },
            transformResponse: (rawResult: { result: number; flight: IFlight[]}) => {
                return rawResult.flight
            }
        })
    }) 
})

export const {useSearchFlightQuery} = flightApi

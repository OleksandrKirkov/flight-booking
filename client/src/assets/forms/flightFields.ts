import {ISearchFlight} from "../../services/flight/IFlight"

export interface IFlightField {
    name: keyof ISearchFlight,
    type: string,
    options: {
        required: string,
        pattern?: {
            value: RegExp,
            message: string
        }
    },
    placeholder: string
}

export const flightFields: IFlightField[] = [
    {
        name: "departure_city",
        type: "text",
        options: {
            required: "This field is required",
        },
        placeholder: "City"
    },
    {
        name: "arrival_city",
        type: "text",
        options: {
            required: "This field is required",
        },
        placeholder: "City"
    },
    {
        name: "departure_date",
        type: "date",
        options: {
            required: "This field is required",
        },
        placeholder: "Date"
    },
    {
        name: "arrival_date",
        type: "date",
        options: {
            required: "This field is required",
        },
        placeholder: "Date"
    }
]

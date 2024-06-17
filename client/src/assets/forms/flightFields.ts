export interface IFlightInput {
    from: string
    to: string
    departure: string
    arrival: string
}

export interface IFlightField {
    name: keyof IFlightInput,
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
        name: "from",
        type: "text",
        options: {
            required: "This field is required",
        },
        placeholder: "City"
    },
    {
        name: "to",
        type: "text",
        options: {
            required: "This field is required",
        },
        placeholder: "City"
    },
    {
        name: "departure",
        type: "date",
        options: {
            required: "This field is required",
        },
        placeholder: "Date"
    },
    {
        name: "arrival",
        type: "date",
        options: {
            required: "This field is required",
        },
        placeholder: "Date"
    }
]

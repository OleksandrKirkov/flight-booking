import {IFlight} from "../../../../../services/flight/IFlight";

export const ticket_data: IFlight[] = [
    {
        id: 1,
        model: "FLightq423432",
        departure_date: "2024-8-12",
        arrival_date: "20240-8-15",
        price: 1200,
        deration: 12,
        airline: {
            id: 1,
            name: "Kuiv"
        },
        departure: {
            id: 1,
            name: "France",
            city: "Paris",
            country: "France"
        },
        arrival: {
            id: 1,
            name: "Kuiv",
            city: "Kuiv",
            country: "Ukraine"
        }
    },
    {
        id: 2,
        model: "FLightq423432",
        departure_date: "2024-8-12",
        arrival_date: "20240-8-15",
        deration: 12,
        price: 1200,
        airline: {
            id: 1,
            name: "Kuiv"
        },
        departure: {
            id: 1,
            name: "France",
            city: "Paris",
            country: "France"
        },
        arrival: {
            id: 1,
            name: "Kuiv",
            city: "Kuiv",
            country: "Ukraine"
        }
    },
    {
        id: 3,
        model: "FLightq423432",
        departure_date: "2024-8-12",
        arrival_date: "20240-8-15",
        deration: 12,
        price: 1200,
        airline: {
            id: 1,
            name: "Kuiv"
        },
        departure: {
            id: 2,
            name: "France",
            city: "Paris",
            country: "France"
        },
        arrival: {
            id: 2,
            name: "Kuiv",
            city: "Kuiv",
            country: "Ukraine"
        }
    }, 
]

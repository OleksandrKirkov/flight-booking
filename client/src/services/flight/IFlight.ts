export interface IFlight {
    id: number
    model: string
    departure_date: string
    arrival_date: string
    deration: number
    price: number
    airline: IAirline
    departure: IAirport
    arrival: IAirport
}

export interface IAirport {
    id: number
    name: string
    city: string
    country: string
}

export interface IAirline {
    id: number
    name: string
}

export interface ISearchFlight {
    departure_city: string
    arrival_city: string
    departure_date: string
    arrival_date: string
}

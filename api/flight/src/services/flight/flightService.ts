import {Airport, Flight} from "../../db/models"

export interface IFlight {
    model: string
    departure_time: string
    arrival_time: string
    duration: number
    price: number
    airline_id: number
    departure_id: number
    arrival_id: number
}

export const getFlight = async ( id: number ) => {
    if( !id ) {
        return Flight.findAll({include: [
            "airline", 
            {model: Airport, as: 'departure'},
            {model: Airport, as: 'arrival'}
        ]})
    }

    return Flight.findOne({ where: { id }, include: ["airline", "airport"] })
}

export const createFlight = async ( data: IFlight ) => {
    const postObject = Flight.build({...data})
    await postObject.validate()
    await postObject.save()

    return {
        ...postObject.dataValues
    }
}

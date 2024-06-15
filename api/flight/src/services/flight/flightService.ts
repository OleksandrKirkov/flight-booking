import {Flight} from "db/models"

export interface IFlight {
    module: string
    departure_time: Date
    arrival_time: Date
    duration: number
    price: number
}

export const getFlight = async ( id: number ) => {
    if( !id ) {
        return Flight.findAll()
    }

    return Flight.findOne({ where: { id } })
}

export const createFlight = async ( data: IFlight ) => {
    const postObject = Flight.build({...data})
    await postObject.validate()
    await postObject.save()

    console.log(postObject, " flight result")

    return {
        ...postObject
    }
}

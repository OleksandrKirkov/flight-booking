import {Airport} from "../../db/models"

export interface IAirport {
    name: string
    city: string
    country: string
}

export const getAirport = async ( id: number ) => {
    if( !id ) {
        return Airport.findAll()
    }

    return Airport.findOne({ where: {id} })
}

export const createAirport = async ( data: IAirport ) => {
    const postObject = Airport.build({...data})
    await postObject.validate()
    await postObject.save()

    return {
        ...postObject.dataValues
    }
}

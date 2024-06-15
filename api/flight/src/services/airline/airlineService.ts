import {Airline} from "../../db/models"

export interface IAirline {
    name: string
}

export const getAirline = async ( id: string ) => {
    if( !id ) {
        return Airline.findAll()
    }

    return Airline.findOne({ where: { id } })
}

export const createAirline = async ( data: IAirline ) => {
    const postObject = Airline.build({...data})
    await postObject.validate()
    await postObject.save()
    
    console.log(postObject, " airline result")

    return {
        ...postObject
    }
}

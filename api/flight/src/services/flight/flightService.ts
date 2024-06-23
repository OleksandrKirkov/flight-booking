import {Op} from "sequelize"
import {Airline, Airport, Flight} from "../../db/models"

export interface IFlight {
    model: string
    departure_date: string
    arrival_date: string
    duration: number
    price: number
    airline_id: number
    departure_id: number
    arrival_id: number
}

export interface ISearchFlight {
    departure_city: string
    arrival_city: string
    departure_date: string
    arrival_date: string
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

export const searchFlight = async ( data: ISearchFlight ) => {
    const departureDate = new Date(data.departure_date)
    const arrivalDate = new Date(data.departure_date)

    const endDepartureDate = new Date(departureDate)
    endDepartureDate.setDate(departureDate.getDate() + 2)

    const endArrivalDate = new Date(arrivalDate)
    endArrivalDate.setDate(arrivalDate.getDate() + 2)

    return Flight.findAll({
        where: {
          departure_date: {
              [Op.between]: [departureDate, endDepartureDate]
          },
          arrival_date: {
              [Op.between]: [arrivalDate, endArrivalDate]
          }
        },
        include: [
            {
                model: Airline,
                as: 'airline',
            },
            {
                model: Airport,
                as: 'departure',
                where: {
                   city: data.departure_city 
                }
            },
            {
                model: Airport,
                as: 'arrival',
                where: {
                    city: data.arrival_city
                }
            }
        ]
    })
}

import {Airline, Airport, Flight} from "../models";

export function applyExtraSetup() {
    Airline.hasMany(Flight, { as: 'flight' })

    Airport.hasMany(Flight, { as: 'departure' })
    Airport.hasMany(Flight, { as: 'arrival' })

    Flight.belongsTo(Airline, {
        foreignKey: 'airline_id',
        as: 'airline'
    })
    Flight.belongsTo(Airport, {
        foreignKey: 'departure_id',
        as: 'departure'
    })
    Flight.belongsTo(Airport, {
        foreignKey: 'arrival_id',
        as: 'arrival'
    })
}

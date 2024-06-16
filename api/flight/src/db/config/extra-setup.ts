import {Airline, Airport, Flight} from "../models";

export function applyExtraSetup() {
    Airline.hasMany(Flight, {sourceKey: 'id', foreignKey: "airline_id"})

    Airport.hasMany(Flight, {sourceKey: 'id', foreignKey: "departure_id"})
    Airport.hasMany(Flight, {sourceKey: 'id', foreignKey: "arrival_id"})

    Flight.belongsTo(Airline, {targetKey: 'id', foreignKey: "airline_id"})
    Flight.belongsTo(Airport, {foreignKey: "departure_id", as: 'departure'})
    Flight.belongsTo(Airport, {foreignKey: "arrival_id", as: 'arrival'})
}

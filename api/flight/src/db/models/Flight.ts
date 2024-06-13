import { Sequelize, DataTypes } from 'sequelize'
import { connection } from 'db/config'

export const Flight = connection.define('flight', {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    arrival_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

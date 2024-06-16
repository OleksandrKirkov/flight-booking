import { DataTypes } from 'sequelize'
import { connection } from '../config'
import {Airline} from './Airline'
import {Airport} from './Airport'

export const Flight = connection.define('flight', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    },

    airline_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Airline,
            key: 'id'
        }
    },
    departure_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Airport,
            key: 'id'
        }
    },
    arrival_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Airport,
            key: 'id'
        }
    } 

} , {
    tableName: 'flight',
    timestamps: false
})

import { Sequelize, DataTypes } from 'sequelize'
import { connection } from 'db/config'

export const Airport = connection.define('airport', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

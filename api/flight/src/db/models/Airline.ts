import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../config";

export const Airline = connection.define('airline', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'airline',
    timestamps: false
})

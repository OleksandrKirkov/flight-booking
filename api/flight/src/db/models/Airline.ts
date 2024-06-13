import { Sequelize, DataTypes } from "sequelize";
import { connection } from "db/config";

export const Airline = connection.define('airline', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

export default const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.USER, 
    process.env.PASSWORD, 
    {
        host: process.env.HOST,
        dialect: "postgres"
    }
)

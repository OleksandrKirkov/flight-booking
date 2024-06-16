import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(process.env?.DB_URI)

import { Sequelize } from 'sequelize'

export const connection = new Sequelize(process.env?.DB_URI)

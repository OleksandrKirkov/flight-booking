import {connection} from "./config"

export const initializeDatabase = async () => {
    try {
        await connection.authenticate()
        
        console.log('[server]: Connection has been established and models synced successfully.')
    } catch (error) {
        console.error('[error]: Unable to connect to the database:', error)
    }
}

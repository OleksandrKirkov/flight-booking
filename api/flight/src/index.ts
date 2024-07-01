import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import Fingerprint from "express-fingerprint"
import { airlineRouter, airportRouter, flightRouter } from "./routes"
import {initializeDatabase} from "./db"
import {Airline, Airport, Flight} from "./db/models"
import {applyExtraSetup} from "./db/config/extra-setup"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))

app.use(Fingerprint())

app.use(cookieParser())
app.use(bodyParser.json())

app.use( airlineRouter )
app.use( airportRouter )
app.use( flightRouter )

app.listen(PORT, async () => {
    await initializeDatabase()
    
    await Airline.sync({force: true})
    await Airport.sync({force: true})
    await Flight.sync({force: true})

    await applyExtraSetup()

    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})

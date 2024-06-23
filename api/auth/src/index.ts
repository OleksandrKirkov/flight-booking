import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import Fingerprint from "express-fingerprint"
import mongoose from "mongoose"
import router from "router"
import errorMiddleware from "middleware/errorMiddleware"

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

app.use('/api', router)
app.use(errorMiddleware)

app.listen(PORT, async () => {
    try {
        await mongoose.connect(process.env.DB_URL)

        console.log(`[server]: Server is running at http://localhost:${PORT}`)
    } catch( error ) {
        console.log(`[error]: ${error}`)     
    }
})

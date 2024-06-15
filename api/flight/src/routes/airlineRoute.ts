import express from 'express'
import {IAirline, createAirline, getAirline} from '../services/airline'

const airlineRouter = express.Router()

airlineRouter.get('/airline', (req, res, next) => {
    const { id } = req.body
    getAirline(id)
        .then(airline => res.json({result: 'Success', airline}))
        .catch(next)
})

airlineRouter.post('/airline', (req, res, next) => {
    const data: IAirline = req.body

    createAirline(data)
        .then(airline => res.status(201).json({ result: 201, airline }))
})

export { airlineRouter }

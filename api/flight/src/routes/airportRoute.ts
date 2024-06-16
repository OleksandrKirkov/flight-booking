import express from 'express'
import {IAirport, createAirport, getAirport} from '../services/airport'
import {airlineRouter} from './airlineRoute'

const airportRouter = express.Router()

airportRouter.get('/airport', (req, res, next) => {
    const { id } = req.body
    getAirport(id)
        .then(airport => res.json({result: 'Success', airport}))
        .catch(next)
})

airlineRouter.post('/airport', (req, res, next) => {
    const data: IAirport = req.body

    createAirport(data)
        .then(airline => res.status(201).json({ result: 201, airline }))
        .catch(next)
})

export { airportRouter }

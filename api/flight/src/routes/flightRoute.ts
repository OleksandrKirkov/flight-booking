import express from 'express'
import {IFlight, ISearchFlight, createFlight, getFlight, searchFlight} from '../services/flight'

const flightRouter = express.Router()

flightRouter.get('/flight', (req, res, next) => {
    const { id } = req.body
    getFlight(id)
        .then(flight => res.json({result: 'Success', flight}))
        .catch(error => {
            console.error(error)
            next(error)
        })
})

flightRouter.post('/flight', (req, res, next) => {
    const data: IFlight = req.body

    createFlight(data)
        .then(flight => res.status(201).json({ result: 201, flight }))
        .catch(error => {
            console.error(error)
            next(error)
        })
})

flightRouter.get('/search-flight', (req, res, next) => {
    const data: ISearchFlight = {} as ISearchFlight

    data.arrival_city = req.query.arrival_city.toString()
    data.arrival_date = req.query.arrival_date.toString()
    data.departure_city = req.query.departure_city.toString()
    data.departure_date = req.query.departure_date.toString()

    searchFlight(data)
        .then(flight => res.status(201).json({ result: 201, flight }))
        .catch(error => {
            console.error(error)
            next(error)
        })
})

export { flightRouter }

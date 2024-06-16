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
    const data: ISearchFlight = req.body

    searchFlight(data)
        .then(flight => res.status(201).json({ result: 201, flight }))
        .catch(error => {
            console.error(error)
            next(error)
        })
})

export { flightRouter }

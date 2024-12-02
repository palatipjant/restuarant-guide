const express = require('express')
const router = express.Router()

const restaurant = require('../models/restaurant.model')
const { generateCrudMethods } = require('../services')
const restaurantCrud = generateCrudMethods(restaurant)
const { validateDbId, raiseRecord404Error } = require('../middlewares')

router.get('/', (req, res, next)=> {
    restaurantCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.get('/:id', validateDbId, (req, res, next)=> {
    restaurantCrud.getById(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    restaurantCrud.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/:id', validateDbId, (req, res, next) => {
    restaurantCrud.update(req.params.id, req.body)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.delete('/:id', validateDbId, (req, res, next) => {
    restaurantCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

module.exports = router
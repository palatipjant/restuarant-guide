const express = require('express')
const bodyParser = require('body-parser')

// local import
const connectDb = require('./db.js')
const restaurantRoutes = require('./controllers/restaurant.controller.js')
const { errorHandler } = require('./middlewares')

const app = express()

// middleware
app.use(bodyParser.json())
app.use('/api/restaurant', restaurantRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('database connect succeeded.')
        app.listen(3000, ()=> console.log('server start at 3000'))
    })
    .catch(err => console.log(err))
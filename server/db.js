const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:1234@cluster0.2eock.mongodb.net/restaurant_db?retryWrites=true&w=majority&appName=Cluster0'


module.exports = () => {
    return mongoose.connect(dbUri
    )
}
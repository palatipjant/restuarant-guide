const mongoose = require('mongoose')

module.exports = mongoose.model('Restaurant', {
    restaurantName : {type:String},
    restaurantLocation: {type:String},
    restaurantPrice: {type:String},
    restaurantDescription: {type:String},
    restaurantDressCode: {type:String},
    restaurantCuisine: {type: [String]},
    restaurantContact: {
        phoneNumber: {type: String},
        email: {type: String},
        websiteUrl: {type: String},
    },
    restaurantRating: {type: Number},
    openingHours: {type: String},
})

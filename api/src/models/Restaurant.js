const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    
    },
    menu: [{
        recipe: {
            type: String,
            require: true,
        },
        ingredients: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            require: true,
        },
    }]

})
RestaurantSchema.plugin(mongoosePaginate);
mongoose.model('Restaurant', RestaurantSchema);
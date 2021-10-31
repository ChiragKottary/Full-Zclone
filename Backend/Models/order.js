const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    placedBy: {
        type: String,
        required: true
    },
    placedByUserId: {
        type: Number,
        required: true
    },
    placedOn: {
        type: Date,
        required: true
    },
     items: {
        type: Array,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
})
module.exports =mongoose.model('order',orderSchema,'order')
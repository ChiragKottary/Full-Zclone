const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const locationCollection = new Schema({
    name: {
        type: String,
        required: true
    },
    locationId: {
        type: Number,
        required: true
    }
})
module.exports =mongoose.model('location',locationCollection,'location')
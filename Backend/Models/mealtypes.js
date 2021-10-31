const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealTypeCollection = new Schema({
    name: {
        type: String,
        required: true
    },
    mealtypeId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('mealType', MealTypeCollection, 'mealtype');
const mealType = require('../Models/mealtypes');

exports.getMealTypes = (req, res) => {
    mealType.find()
        .then(response => {
            res.status(200).json({ message: "MealTypes Fetched Succesfully", mealTypes: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
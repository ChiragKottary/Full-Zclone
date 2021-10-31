
const location =require('../Models/locations');
exports.getLocations = (req,res) =>{
    location.find()
    .then(response => {
        res.status(200).json({message:"Locations fetched Succesfully",locations: response})
    })
    .catch(
        err =>{
            res.status(500).json({error:err})
        })
}
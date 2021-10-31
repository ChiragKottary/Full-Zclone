const Order = require('../Models/order');


exports.getOrderByUserId = (req,res) =>{
    const { userId} = req.params;
    Order.find({placedByUserId: userId})
    .then(response => {
        res.status(200).json({message:"Order fetched Succesfully",order: response})
    })
    .catch(
        err =>{
            res.status(500).json({error:err})
        })
}
exports.saveOrderDetails = (req,res)=>{
    const {placedBy,placedByUserId,items,Amount,restaurantId} = req.body;
    const order = new Order({
        placedBy,
        placedByUserId,
        placedOn: new Date(),
        items,
        Amount,
        restaurantId
   });
   order.save()
   .then(response =>{
       res.status(200).json({message:"Order Registered Sucessfully", order: response})
   })
   .catch(err =>{
       res.status(500).json({error:err})
   })
}
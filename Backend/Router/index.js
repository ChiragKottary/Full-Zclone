const express = require('express');
const route = express.Router();

const locationControlller = require('../Controllers/location');

const mealTypeController = require('../Controllers/mealtypes');

const restaurantController = require('../Controllers/restaurant');
const menuItemsController = require('../Controllers/item');
const orderController = require('../Controllers/order');
const userController = require('../Controllers/users');
const paymentGatewayController = require('../Controllers/PaymentGateway');

route.get('/locations', locationControlller.getLocations);

route.get('/mealtypes', mealTypeController.getMealTypes);

route.get('/restaurant/:locId', restaurantController.getRestaurantByLocation);
route.post('/filter',restaurantController.restaurantFilter);
route.get('/getResById/:resId',restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId',menuItemsController.getMenuItemsByResId);
route.get('/order/:userId',orderController.getOrderByUserId);

route.post('/payment',paymentGatewayController.payment);
route.post('/callback',paymentGatewayController.callback);

route.post('/order',orderController.saveOrderDetails)
route.post('/usersignup',userController.userSignUp);
route.post('/login',userController.userLogin);

module.exports =route;
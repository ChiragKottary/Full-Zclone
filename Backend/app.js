const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const resRoutes = require('./Router/index');   // importing routes from routes file

// const hostname = '0.0.0.0';
const hostname = '0.0.0.0';
const port = process.env.PORT || 2121;

const app = express();

// handling CORS - Cross Origin Resource Sharing Issue
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(express.json());    // applying body-parser as middleware to parse JSON requests 

// navigating all requests to routes
app.use('/', resRoutes);

// connect to mongo DB instance of atlas
mongoose.connect('mongodb+srv://zm_clone:9QUdQT1AmzT4xpAq@cluster0.fhcnp.mongodb.net/zomato_clone?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    // starting the server using the listen function
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})
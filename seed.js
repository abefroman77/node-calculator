const mongoose = require('mongoose');

const Coin = require("./models/coinModel");
const Node = require("./models/nodeModel");

mongoose.connect('mongodb://localhost:27017/node-calculator').then(() => {
    console.log('Connection established')
}).catch(err => {
    console.log("Error:");
    console.error(err);
})


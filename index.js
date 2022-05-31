const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const Coin = require("./models/coinModel");
const Node = require("./models/nodeModel");

mongoose.connect('mongodb://localhost:27017/node-calculator').then(() => {
    console.log('Connection established')
}).catch(err => {
    console.log("Error:");
    console.error(err);
})




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
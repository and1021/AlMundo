'use strict'

const express = require('express');
const path = require('path');
const app = express();
const basic = require('./server/routes/basic');
const hotels = require('./server/routes/hotels');
//const hotelsdb = require('./server/routes/hotelsdb');
const port = process.env.PORT || 4200;
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', basic);
app.use('/hotels', hotels);
//app.use('/hotelsdb', hotelsdb);
app.get('*', (req, res)=>(
    res.sendFile(path.join(__dirname, 'dist/index.html'))
));
app.listen(port, (req, res)=>(
    console.log(`PORT: ${port}`)
));
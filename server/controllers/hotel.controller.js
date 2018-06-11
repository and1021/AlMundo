'use strict'

const fs = require('fs');
var path = require('path');

function getListHotels(req, res){
    var fs = require('fs');
    res.status(200).send(JSON.parse(fs.readFileSync('./server/src/data/data.json', 'utf8')));
}

module.exports ={
    getListHotels
}
'use strict'

const fs = require('fs');
var path = require('path');

function getListHotels(req, res){
    var fs = require('fs');
    let filter = (req.params['filters']).split('|');
    let filterArray = filter.map(element => {
        let newElement = element.split(':');
        let values = newElement[1].split('-');
        return {filter:newElement[0], value:values};
    });
    if(!!filterArray && filterArray.length > 0){
        console.log(filterArray);
        var hotelsArr = [];
        var consult = JSON.parse(fs.readFileSync('./server/src/data/data.json', 'utf8'));
        console.log(consult);
        filterArray.forEach(elementFilter => {
            let tempResult = [];
            consult.forEach(element => {
                elementFilter.value.forEach(elementValue =>{
                    console.log('propiedad: ' + elementFilter.filter + ', valor: ' + elementValue);
                    if (!!element && element[elementFilter.filter].toString().toLowerCase().indexOf(elementValue.toLowerCase()) >= 0) {
                        console.log(element);
                        return tempResult.push(element);
                    }
                });
            });
            consult = tempResult; 
        });        
        res.status(200).send(consult);
    }else{
        res.status(200).send(JSON.parse(fs.readFileSync('./server/src/data/data.json', 'utf8')));
    }
}

module.exports ={
    getListHotels
}
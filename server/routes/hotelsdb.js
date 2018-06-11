'use strict'

const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    //res.status(200).send('hotelsdb works');
    //TODO Conectar con base de datos mongo
    res.send(200, JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8')));
});
module.exports = router;
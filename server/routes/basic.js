'use strict'

const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    res.status(200).send('Routes works');
});

//TODO Generar metodo de obtencion de filtros dinamicos
router.get('/filter', (req, res)=>{
    res.status(200).send('Filter works');
});
module.exports = router;
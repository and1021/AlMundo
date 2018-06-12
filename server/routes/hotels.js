'use strict'

const express = require('express');
const router = express.Router();
var HoltelController = require('../controllers/hotel.controller');
// router.get('/', (req, res)=>{
//     //res.status(200).send('hotels works');
// });
router.get('/:filters', HoltelController.getListHotels);
module.exports = router;
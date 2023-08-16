const express = require('express');
const router = express.Router();
const User = require('../models/user')
const {body, validationResults} = require('express-validator')

router.get("/info",(req,res)=>{
    res.send("Hello World")
})

module.exports = router
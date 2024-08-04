const express = require('express');
const Users = require('../modules/Users');
const router = express.Router();

router.post('/',(req, res)=>{
    const user = Users(req.body)
    user.save
    res.send(req.body)
    console.log(req.body)
})

module.exports = router
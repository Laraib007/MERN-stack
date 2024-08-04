const express = require('express');
const User = require('../modules/User');
const router = express.Router();

router.post('/', (req, res)=>{
    const user = User(req.body)
    user.save()
    res.send(req.body)
    console.log(req.body)
})

module.exports = router
const express = require('express');
const User = require('../modules/User');
const router = express.Router();

router.post('/',[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })

], (req, res)=>{
    
    const user = User(req.body)
    user.save()
    res.send(req.body)
    console.log(req.body)
})

module.exports = router
const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Validating user inputs but not login
router.post('/', [
    body('name', "Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password must be 5 letters").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }

    try{
        // finding user exist or not
let user = await User.findOne({email: req.body.email})
if(user){
    return res.status(404).json({ Msg: "Sorry user with this email is already exist" })
}
// creating new user after validating 
     user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })
    
res.json(user)
// catching error 
} catch (error){
    console.error({error: error.message})
    res.status(500).send("some error occurd")

}
});
module.exports = router
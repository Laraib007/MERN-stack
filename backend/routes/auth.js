const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



// Creating user but not login required
router.post('/createUser', [
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
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt);
     user = await User.create({
        name: req.body.name,
        password: hash,
        email: req.body.email
    })
    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'shhhhh');
    console.log(token)
res.json({token})
// catching error 
} catch (error){
    console.error({error: error.message})
    res.status(500).send("some error occurd")

}
// Creating user but not login required
router.post('/login', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password can not be blanked").exists()
],
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
})




});
module.exports = router
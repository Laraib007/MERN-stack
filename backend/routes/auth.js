const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name', "Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password must be 5 letters").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
let user = await User.findOne({email: req.body.email})
if(user){
    return res.status(404).json({ Msg: "Sorry user with this email is already exist" })
}
     user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })
    
    
/*    .then(user => res.json(user))
//     .catch(err => {console.log(err)
//     res.json({msg: "Please enter a valid emailS"})})
/*/
res.json({Nice:" nice"})
 });

module.exports = router
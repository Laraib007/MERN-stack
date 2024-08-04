const express = require('express')
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({Message: "Notes File is working"})
})
module.exports = router
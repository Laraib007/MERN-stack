const express = require('express')
const router = express.Router();

app.get('/',(req, res)=>{
    res.json({Message: "Users File is working"})
})

module.exports = router()
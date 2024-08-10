const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../modules/Note');
const { body, validationResult } = require('express-validator');




router.get('/fetchallnotes',fetchuser, (req, res)=>{
   try {
       const notes = Note.find({user: req.user.id})
       res.json(notes)

    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
}
    catch (error){
        console.error({error: error.message})
        res.status(500).send("Some internal error")
    
    }
})
module.exports = router
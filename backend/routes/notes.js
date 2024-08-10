const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../modules/Note');
const { body, validationResult } = require('express-validator');



// Route 1: Featching all the Notes Type: Get /fetchallnotes:: Login Required
router.get('/fetchallnotes',fetchuser, async (req, res)=>{
   try {
       const notes = await Note.find({user: req.user.id})
       res.json(notes)
}
    catch (error){
        console.error({error: error.message})
        res.status(500).send("Some internal error")
    
    }
})

// Route 2: Featching all the Notes Type: post /addnote:: Login Required
router.post('/addnote',fetchuser, [
    body('title', "Enter a valid Title").isLength({ min: 3 }),
    body('descripition', "Descripition must be 5 letters").isLength({ min: 5 })
], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }

    const {descripition, title, tag} = req.body
    try {

        const note = new Note({
            descripition, title, tag, user: req.user.id
        })
        const addNote = await note.save()

        return res.json(addNote)
 }
     catch (error){
         console.error({error: error.message})
         res.status(500).send("Some internal error")
     
     }
 })

 
// Route 3: Updating an existing Note ReqType: Put /addnote:: Login Required
router.post('/addnote',fetchuser, async (req, res)=>{
    const {descripition, title, tag} = req.body

})

module.exports = router
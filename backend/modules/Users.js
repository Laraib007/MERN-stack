const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
   title:{
    type: String,
    require: true
   },
   descripition:{
    type: String,
    require: true
   },
   tag:{
    type: String,
    default: "General"
   },
   date:{
    type: Date,
    default: Date.now
   }
  });

  module.exports = mongoose.model('user', NoteSchema)
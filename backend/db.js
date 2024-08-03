const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost:27017/labi/';

const connectToMongose = ()=>{
    mongoose.connect(mongooseURI, console.log("database connected sucessfully"))
}
module.exports = connectToMongose;
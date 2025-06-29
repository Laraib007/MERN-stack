const mongoose = require('mongoose');
const mongooseURI = process.env.MONGOSSE_URI;


const connectToMongose = ()=>{
    mongoose.connect(mongooseURI, console.log("database connected sucessfully"))
}
module.exports = connectToMongose;
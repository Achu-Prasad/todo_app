const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.DBURI;

connection();
async function connection() {
    try {
        await mongoose.connect(dbURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    username : {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3,
        maxLEngth:30,
    },
    password: {
        type:String,
        required:true,
        minLength:6,
    },
    firstName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    lastName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    }
    

});
const User = mongoose.model('User',userSchema);
module.exports = {User};
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://achuprasad:QgXCSX4IDTZ60PG5@cluster0.o8v7l5w.mongodb.net/Auth_test";

connection();
async function connection(){
    try{
        await mongoose.connect(dbURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
    catch(error){
        console.log(error)
    }
};
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
        lowercase:true,
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
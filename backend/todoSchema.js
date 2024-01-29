const mongoose = require('mongoose')

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

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        value:false,
    }
});

const Todo = mongoose.model('Todo',todoSchema);
module.exports = {Todo}
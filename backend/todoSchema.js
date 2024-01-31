const mongoose = require('mongoose');
const {User} = require('./mongo');

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

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed:{ type:Boolean, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  });

const Todo = mongoose.model('Todo',todoSchema);
module.exports = {Todo}
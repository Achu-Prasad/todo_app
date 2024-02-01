const express = require('express');
const cors = require ('cors');
const jwt = require ('jsonwebtoken');
const {z, string} = require ('zod');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const bcrypt = require ('bcrypt');
const {User} = require('./mongo');
const {JWT_SECRET} = require('./authetication/config');
const {Todo} = require('./todoSchema');
const {updateTodo,createTodo} = require('./zodTodo');
const authChecker = require('./middlewares/authChecker');


const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

// Signup functionality 
// using zod for schema validations 

const signupBody = z.object({
    email:z.string().email(),
    username:z.string(),
    password:z.string(),
    firstName:z.string(),
    lastName:z.string(),
})

// post request for signing up
// STEPS
//1. first try to safeparse it if its not parsing that means something in input is not correct as in the schema
//2. if its parsed check for used email if email is used the user already signedup 
//3. if the email is not taken create user based on schema, hash password using bcrypt, provide tocken using jwt

app.post('/signup',async (req,res)=>{
    const {success} = signupBody.safeParse (req.body);
    if(!success){
        return res.status(411).json({
            message: "incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        email:req.body.email,
    })
    if(existingUser){
        return res.status(411).json({
            message : "Email is alredy taken, use another one"
        })
    }
    else{
        try{
            const {email,username,password,firstName,lastName} = req.body;
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new User({email,username,password:hashedPassword,firstName,lastName});
            await newUser.save();
            const userId = User._id
            const token = jwt.sign({userId},JWT_SECRET)
            res.status(201).json({message: 'User created succesfully',token:token})
        }
        catch(error){
            console.error("Error during signup:", error);
            res.status(500).json({ message: "error signing up", error: error.message });
        }
    }
});

//LOG IN Fucntionality
//STEP 1 zod validation 
//2. if zod validation completed check user exists or not 
//3. if user exists check password is valid or not
//4. is password valid then provide jwt token

const loginBody = z.object({
    email:z.string().email(),
    password:string(),
})
app.post('/login', async (req,res)=>{
    const {success} = loginBody.safeParse(req.body);
    if(!success){
        return res.status(401).json({
            message: "Check your input"
        });
    }
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "email not exists / check your input"
            })
        }
        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.status(401).json({
                message:"invalid Credentials"
            })
        }
        const token = jwt.sign({ userId:user._id },JWT_SECRET,{ expiresIn: '1hr' })
        res.status(201).json({
            message: "logged in successfully",
            token:token
        })
    }
    catch(error){
        console.error("Login Error",error);
        res.status(500).json({message: "error logging in", error: error.message})
    }

});

//TODO Backend Logic 
//STEP 1. make a Middleware and import it and use it in every todomaking requests

app.post('/todo',authChecker,async (req,res)=>{
    const {success} = createTodo.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            message:"wrong todo input"
        });
    }
    try{
        const userId = req.userId;
        await Todo.create({
            title:req.body.title,
            description:req.body.description,
            completed:req.body.completed,
            userId:userId, 
        })
        res.status(201).json({
            message:"Todo created"
        })
    }
    catch(error){
        console.error("Todo making error",error)
        res.status(500).json({message:"error making todo",error:error.message})
    }
})
app.get('/todo',authChecker,async (req,res) => {
    const userId = req.userId;
    try{
        const todos = await Todo.find({userId});
        res.status(200).json({todos})
    }
    catch(error){
        res.status(500).json({
            message:"cant get todos some issue",
            error:error.message
        })
    }
})

app.put('/todo/:todoId',authChecker, async (req,res) => {
    const {success} = updateTodo.safeParse(req.body)
    if(!success){
        return res.status(400).json({
            message: " wrong input cant change Todo",
        })
    }
    try{
        const todoId = req.params.todoId
        const userId = req.userId

        const updateTodoUser = await Todo.findOneAndUpdate({_id:todoId,userId})
        if(!updateTodoUser){
            return res.status(400).json({
                message: "cant find todo/ todo not exists"
            })
        }
    }
    catch(error){

    }
})


app.listen(PORT)
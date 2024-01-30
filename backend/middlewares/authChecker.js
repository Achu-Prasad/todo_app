const express = require('express');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../authetication/config')

const app = express();
app.use(express.json());

const authChecker = (req,res,next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message:" You are not an autheticated user"
        })
    }
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(403).json({
                message:"JWT not variefied"
            });
        }
        req.userId = decoded.userId;
        next();
    })
}
module.exports = authChecker;

const userModel = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    try{
        // Existing User Check
        const exixtingUser = await userModel.findOne({email: email});
        if(exixtingUser){
            return res.status(400).json({message: "User already exist please signIn"});
        }

        // Hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        // User Creation
        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        });

        // Token Generate

        const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY);
        res.status(201).json({user: result, token: token});
    }catch(e){
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

const signin = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const existingUser = await userModel.findOne({email: email});
        if(!existingUser){
            return res.status(404).json({message: "User Not Found"});
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, SECRET_KEY);
        res.status(201).json({user: existingUser, token: token});
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {signup, signin};
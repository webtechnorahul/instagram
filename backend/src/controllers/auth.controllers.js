import userModel from "../models/auth.models.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/config.js";
export async function userRegister(req,res){
  const isUserExist=await userModel.findOne({$or:[
    {
      email:req.body.email
    },
    {
      mobile:req.body.username
    }
  ]})
  if(isUserExist){
    const message=isUserExist.username===req.body.username?"username already exist":"email already exist";   
    res.status(409).json({message:message})
  }
  const hashPassword=await bcrypt.hash(req.body.password,10);
    const newUser=await userModel.create({
      username:req.body.username,
      mobile:req.body.mobile,
      email:req.body.email,
      password:hashPassword,
      profileImg:req.body.profileImg
    })
    const token=jwt.sign({
        id:newUser._id,
        email:newUser.email
    },config.JWT_SECRET,{expiresIn:60*60});

    res.cookie("token",token);
   res.status(201).json({message:"user register successful",user:newUser});
}
export async function userLogin(req,res) {
    const {password,email,username}=req.body;
    const isUserExist=await userModel.findOne({$or:[
        {
            email:email
        },
        {
            username:username
        }
    ]}).select("+password");

    if(!isUserExist){
        const message=email ||username;
      return res.status(404).json({message:`${message} is not registered`});
    }

    const isPasswordMatch=await bcrypt.compare(password,isUserExist.password);
    if(!isPasswordMatch){
      return res.status(403).json({message:"Incorrect password"});
    }

    const token=jwt.sign({
        id:isUserExist._id,
        email:isUserExist.email
    },config.JWT_SECRET)

    res.cookie("token",token,{expiresIn:60*60})
    res.status(200).json({message:"login successful",user:isUserExist})
}

export async function getMe(req,res){
  const userId=req.user;
  const isUserExist=await userModel.findById({_id:userId}).select("-password");
  if(!isUserExist){
    res.status(404).json({message:"user not found"})
  }
  res.status(200).json({message:"user get",user:isUserExist})
}
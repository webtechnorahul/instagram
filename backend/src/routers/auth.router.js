import express from 'express';
import {userLogin,userRegister,getMe} from '../controllers/auth.controllers.js';
import { identifyUser } from '../middleware/auth.middleware.js';
const authRouter=express.Router();
authRouter.post('/register',userRegister)

authRouter.post('/login',userLogin)

authRouter.get('/get-me',identifyUser,getMe)

export default authRouter
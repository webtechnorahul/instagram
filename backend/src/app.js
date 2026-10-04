import express from 'express'
import authRouter from './routers/auth.router.js';
import cookieParser from 'cookie-parser'
import multer, { memoryStorage } from 'multer'
import postRouter from './routers/post.router.js';
import followRouter from './routers/follow.router.js';
import cors from 'cors'
import likeRouter from './routers/like.router.js';

const app=express();

// Keeps uploaded files in memory for the post image-upload handler.
const upload=multer({storage:multer.memoryStorage()})

// Configures request parsing, credentialed CORS, cookies, and API route groups.
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
app.use('/api/auth',authRouter);
app.use('/api/user',followRouter);
app.use('/api/post',upload.single('image'),postRouter);
app.use('/api/post',likeRouter);

export default app
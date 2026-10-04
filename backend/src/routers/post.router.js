import express from 'express'
import { allPost, createPost, getMyPost, postDetail } from '../controllers/post.controller.js';
import { identifyUser } from '../middleware/auth.middleware.js';
const postRouter=express.Router();

postRouter.post('/createPost',identifyUser,createPost)
postRouter.get('/allPost',identifyUser,allPost)
postRouter.get('/mypost',identifyUser,getMyPost)
postRouter.get('/postDetails/:id',identifyUser,postDetail)

export default postRouter
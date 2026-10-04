import express from 'express'
import { identifyUser } from '../middleware/auth.middleware.js';
import { userLikedPost,userUnlikedPost,totlalikesInPost } from '../controllers/like.controller.js';

const likeRouter=express.Router();

/**
 * @route /api/post/like/:postId
 * @description like one post
 * @access private
 */
likeRouter.post("/like/:postId",identifyUser,userLikedPost)
likeRouter.get("/totalLikes/:postId",identifyUser,totlalikesInPost)

/**
 * @route /api/post/like/:postId
 * @description like one post
 * @access private
 */

likeRouter.delete("/unlike/:postId",identifyUser,userUnlikedPost)

export default likeRouter
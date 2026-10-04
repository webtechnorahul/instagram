import express from 'express'
import { identifyUser } from '../middleware/auth.middleware.js';
import { userLikedPost,userUnlikedPost,totlalikesInPost } from '../controllers/like.controller.js';

const likeRouter=express.Router();

// Requires authentication for liking posts and reading their like counts.
/**
 * @route /api/post/like/:postId
 * @description like one post
 * @access private
 */
likeRouter.post("/like/:postId",identifyUser,userLikedPost)
likeRouter.get("/totalLikes/:postId",identifyUser,totlalikesInPost)

// Requires authentication before removing a post like.
/**
 * @route /api/post/like/:postId
 * @description like one post
 * @access private
 */

likeRouter.delete("/unlike/:postId",identifyUser,userUnlikedPost)

export default likeRouter
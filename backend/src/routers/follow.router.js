import express from 'express'
import { followUser, unfollowUser } from '../controllers/follow.controller.js';
import { identifyUser } from '../middleware/auth.middleware.js';

const followRouter=express.Router();

// Requires an authenticated user for follow and unfollow actions.
followRouter.post('/follow/:followerId',identifyUser,followUser);
followRouter.delete('/unfollow/:followeeid',identifyUser,unfollowUser)

export default followRouter;
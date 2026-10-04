import mongoose from "mongoose";
import userModel from "../models/auth.models.js";
import followModel from "../models/follow.model.js";

// Creates a follow relationship between the signed-in user and the requested account.
export async function followUser(req,res) {
    const followee=req.params.followerId;
    const follower=req.user;
    const objectId = new mongoose.Types.ObjectId(followee);
    const isUserExist=await userModel.findOne({
        _id:objectId
    })
    if(!isUserExist){
        res.status(404).json({massage:"you can't follow this user ,user not found"})
    }
    const isAlreadyFollow=await followModel.findOne({follower:follower,followee:followee})

    if(isAlreadyFollow){
        res.status(409).json({message:"you are already follow"});
    }
    const isUserMatch=follower===followee
     if(isUserMatch){
        res.status(409).json({mesage:"you can't follow yourself"});
    }else{
        const follow=await followModel.create({
        follower:follower,
        followee:followee
        });

        res.status(201).json({message:"follow successfull",follow:follow});
    }
}

// Removes the signed-in user's follow relationship with the requested account.
export async function unfollowUser(req,res){
    const followerId=req.user;
    const followeeId=req.params.followeeid;

    const UserId=new mongoose.Types.ObjectId(followeeId)
    const isFollowerExit=await userModel.findOne({
        _id:UserId
    })
    if(!isFollowerExit){
        res.status(404).json({message:"followee not found"})
    }
    const isFollowed=await followModel.findOne({followee:followeeId,follower:followerId});
    if(!isFollowed){
        res.status(404).json({message:"you are not follow "})
    }
    const unfollow=await followModel.findByIdAndDelete({_id:isFollowed._id})
    res.status(202).json({message:"user unfollowed successfully",unfollow:unfollow})
}
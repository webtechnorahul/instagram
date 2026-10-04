
import likeModel from '../models/like.model.js';
import postModel from '../models/post.model.js'

// Adds a like from the signed-in user to the requested post.
export async function userLikedPost(req, res) {
    const userId = req.user;
    const postId = req.params.postId;
    const isPostExist = await postModel.findById({_id:postId});
    if(!isPostExist){
        res.status(404).json("post not found");
    }
    const isLikedExist=await likeModel.findOne({ userId, postId });

    if(isLikedExist){
        res.status(409).json({message:"already liked this post"});
    }
    else{
        const isLiked = await likeModel.create({ userId, postId });

        return res.status(201).json({message:"liked successfull",like:isLiked});
    }
    
}

// Removes the signed-in user's like from the requested post.
export async function userUnlikedPost(req,res){

    const userId = req.user;
    const postId = req.params.postId;

    const isPostExist = await postModel.findById({_id:postId});
    if(!isPostExist){
        res.status(404).json("post not found");
    }
    const isLiked = await likeModel.findOneAndDelete({userId,postId});
    if(!isLiked){
        res.status(404).json({message:"you are already unlike this post"})
    }
    return res.status(200).json({message:"unliked this post",like:isLiked});
}

// Returns the number of likes recorded for the requested post.
export async function totlalikesInPost(req, res) {
    const userId = req.user;
    const postId = req.params.postId;
    const isPostExist = await likeModel.find({postId});
    if(!isPostExist){
        res.status(404).json("post not found");
    }
    else{
        return res.status(201).json({message:"post found",like:isPostExist.length});
    }
    
}

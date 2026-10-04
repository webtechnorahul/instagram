import { useSelector } from "react-redux";
import { TotalLikes, userLikePost,userUnlikePost } from "../services/like.services";
import { setLike ,setTotalLike} from "../state/like.slice";
import { usePost } from "./usePost";
import { useState } from "react";

// Provides like actions and synchronizes post counts with the feed and Redux.
export const useLike=()=>{
    const {getAllPost}=usePost();
    const [likespostonClikc, setlikespostonClikc] = useState(0)
    const {like,totalLike}=useSelector((state)=>state.like)

    // Loads a post's like count and updates local and shared state.
    const totalPostLikes=async(postId)=>{
        const response=await TotalLikes(postId);
        setTotalLike(response.like);
        setlikespostonClikc(response.like);
        return response.like;
    }
    // Likes a post, refreshes its count, and reloads the feed's liked indicators.
    const likedPost=async(postId)=>{
        
        const response=await userLikePost(postId);
        setLike(response.like._id);
        await totalPostLikes(postId);
        await getAllPost();
        return response.like;
    }
    // Removes a post like, then refreshes its count and feed data.
    const unLikedPost=async(postId)=>{
        
        const response=await userUnlikePost(postId);
        setLike(response.like._id);
        await getAllPost();
        await totalPostLikes(postId);
        return response.like;
    }

   

    return {
        likedPost,unLikedPost,totalPostLikes,totalLike,likespostonClikc,setlikespostonClikc}
}
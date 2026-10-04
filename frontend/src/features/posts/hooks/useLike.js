import { useSelector } from "react-redux";
import { TotalLikes, userLikePost,userUnlikePost } from "../services/like.services";
import { setLike ,setTotalLike} from "../state/like.slice";
import { usePost } from "./usePost";
import { useState } from "react";
export const useLike=()=>{
    const {getAllPost}=usePost();
    const [likespostonClikc, setlikespostonClikc] = useState(0)
    const {like,totalLike}=useSelector((state)=>state.like)

    const totalPostLikes=async(postId)=>{
        const response=await TotalLikes(postId);
        setTotalLike(response.like);
        setlikespostonClikc(response.like);
        return response.like;
    }
    const likedPost=async(postId)=>{
        
        const response=await userLikePost(postId);
        setLike(response.like._id);
        await totalPostLikes(postId);
        await getAllPost();
        return response.like;
    }
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
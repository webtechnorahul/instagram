import {api} from "./api.js";

export async function userLikePost(postId) {
    const response=await api.post(`/like/${postId}`);
    
    return response.data;
}

export async function userUnlikePost(postId) {
    const response=await api.delete(`/unlike/${postId}`);
    return response.data;
}

export async function TotalLikes(postId){
    const response=await api.get(`/totalLikes/${postId}`);
    return response.data;
}
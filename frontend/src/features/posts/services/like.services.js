import {api} from "./api.js";

// Sends a request to like the specified post.
export async function userLikePost(postId) {
    const response=await api.post(`/like/${postId}`);
    
    return response.data;
}

// Sends a request to remove the current user's like from the specified post.
export async function userUnlikePost(postId) {
    const response=await api.delete(`/unlike/${postId}`);
    return response.data;
}

// Requests the current like count for the specified post.
export async function TotalLikes(postId){
    const response=await api.get(`/totalLikes/${postId}`);
    return response.data;
}
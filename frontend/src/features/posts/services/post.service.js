import {api} from './api.js'

// Fetch all posts
export async function allPost() {
    const response = await api.get("/allPost");
    return response.data;
}

// Create a new post
export async function createPost({ caption, image }) {

    const formData=new FormData()
    
    formData.append("caption",caption);
    formData.append("image",image)
    const response = await api.post("/createPost",formData);
    return response.data;
}

// // Get single post details
// export async function getPostDetails(postId) {
//     const response = await api.get(`/${postId}`);
//     return response.data;
// }

// // Like or unlike a post
// export async function likePost(postId) {
//     const response = await api.post(`/like/${postId}`);
//     return response.data;
// }

// // Add a comment to a post
// export async function commentPost(postId, commentText) {
//     const response = await api.post(`/comment/${postId}`, { text: commentText });
//     return response.data;
// }

export default api;


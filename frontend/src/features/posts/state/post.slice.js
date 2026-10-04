import { createSlice } from "@reduxjs/toolkit";

// Holds the selected post, feed items, and post-request status in Redux.
const PostSlice=createSlice({
    name:'post',
    initialState:{
        post:null,
        posts:[],
        error:null,
        loading:false
    },
    reducers:{
        // Stores the currently selected post.
        setPost:(state,action)=>{
            state.post=action.payload;
        },
        // Replaces the list of posts shown in the feed.
        setPosts:(state,action)=>{
            state.posts=action.payload;
        },
        // Stores an error produced while loading or creating posts.
        setError:(state,action)=>{
            state.post=action.payload;
        },
        // Updates the post request's loading status.
        setLoading:(state,action)=>{
            state.post=action.payload;
        }
    }
})
export const {setError,setLoading,setPost,setPosts}=PostSlice.actions
export default PostSlice.reducer

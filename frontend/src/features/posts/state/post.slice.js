import { createSlice } from "@reduxjs/toolkit";

const PostSlice=createSlice({
    name:'post',
    initialState:{
        post:null,
        posts:[],
        error:null,
        loading:false
    },
    reducers:{
        setPost:(state,action)=>{
            state.post=action.payload;
        },
        setPosts:(state,action)=>{
            state.posts=action.payload;
        },
        setError:(state,action)=>{
            state.post=action.payload;
        },
        setLoading:(state,action)=>{
            state.post=action.payload;
        }
    }
})
export const {setError,setLoading,setPost,setPosts}=PostSlice.actions
export default PostSlice.reducer

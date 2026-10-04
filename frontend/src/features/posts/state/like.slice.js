import { createSlice } from "@reduxjs/toolkit";

// Holds the latest like result and total like count for post interactions.
const likeSlice=createSlice({
    name:'like',
    initialState:{
        like:false,
        totalLike:0,
    },
    reducers:{
        // Stores the result or identifier returned by a like action.
        setLike:(state,action)=>{
            state.like=action.payload;
        },
        // Stores the latest like count returned for a post.
        setTotalLike:(state,action)=>{
            state.totalLike=action.payload
        }
    }
})
export const {setLike,setTotalLike}=likeSlice.actions
export default likeSlice.reducer

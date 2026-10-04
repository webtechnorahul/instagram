import { createSlice } from "@reduxjs/toolkit";

const likeSlice=createSlice({
    name:'like',
    initialState:{
        like:false,
        totalLike:0,
    },
    reducers:{
        setLike:(state,action)=>{
            state.like=action.payload;
        },
        setTotalLike:(state,action)=>{
            state.totalLike=action.payload
        }
    }
})
export const {setLike,setTotalLike}=likeSlice.actions
export default likeSlice.reducer

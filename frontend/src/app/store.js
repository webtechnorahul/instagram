import {configureStore} from '@reduxjs/toolkit'
import authReducer from "../features/auth/state/auth.slice"
import postReducer from "../features/posts/state/post.slice"
import likeReducer from "../features/posts/state/like.slice"
export const store=configureStore({
    reducer:{
        auth:authReducer,
        post:postReducer,
        like:likeReducer,
    }
})
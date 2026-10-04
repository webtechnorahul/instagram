import { useDispatch, useSelector } from "react-redux";
import { setLoading,setError,setPost,setPosts } from "../state/post.slice";
import {allPost,createPost} from '../services/post.service'
export const usePost=()=>{
    const {post,posts,error,loading}=useSelector((state)=>state.post);
    const dispatch=useDispatch();
    const getAllPost=async()=>{
        dispatch(setLoading(true));
        dispatch(setError(false));
        const response=await allPost();
        dispatch(setPosts(response.post));
        dispatch(setLoading(false));
        return response.post;
    }
    const createNewPost=async({caption,image})=>{
        const response=await createPost({caption,image});
        return response.post;
    }
    return {
        posts,post,error,loading,getAllPost,createNewPost
    }
}
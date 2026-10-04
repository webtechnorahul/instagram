import React, { useEffect } from 'react'
import { usePost } from '../hooks/usePost'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post'

const AllPost = () => {
   const dispatch=useDispatch()
    const {getAllPost,loading,posts,error}=usePost();
    const getPosts=async()=>{
        try{
            await getAllPost();
            
        }
        catch(err){
            dispatch(setError(err.response));
        }
        
    }
    if(loading){
        return <h1>loading</h1>
    }
    useEffect(()=>{
        getPosts();
    },[])
  return (
    <div>
        {posts.map((post,idx)=>{
             
            return <Post key={idx} post={post}/>
        }).reverse()}
    </div>
  )
}

export default AllPost
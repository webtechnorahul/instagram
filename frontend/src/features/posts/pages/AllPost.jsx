import React, { useEffect } from 'react'
import { usePost } from '../hooks/usePost'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post'


// Loads the feed and renders each result with the shared post card component.
const AllPost = () => {
   const dispatch=useDispatch()
    const {getAllPost,loading,posts,error}=usePost();
    // Requests the feed and forwards a failed request to the Redux error action.
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
    <div className='all-post'>
        {posts.map((post,idx)=>{
             
            return <Post key={idx} post={post}/>
        }).reverse()}
    </div>
  )
}

export default AllPost
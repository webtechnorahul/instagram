import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import '../style/Post.css'
import { useLike } from '../hooks/useLike';
const Post = ({post}) => {
    
    
    const {likedPost,unLikedPost,totalPostLikes,totalLike,setlikespostonClikc,likespostonClikc}=useLike();
    const likePost=async(postId)=>{
        if(post.isLiked){
            await unLikedPost(postId);
            setlikespostonClikc(likespostonClikc-1);
        }
        else{
            await likedPost(postId);
            setlikespostonClikc(likespostonClikc+1);
        }
    }

    async function callLikePost(){
        const response=await totalPostLikes(post._id);
    }

    useEffect(()=>{
        callLikePost();
    },[])
    
  return (
    <div className="post">
        <div className="top-card-header">
            <div className="post-user-info">
                <img src={post.userId.profileImg} alt={post.userId.username} className="post-avatar" />
                <div className="post-user-details">
                    <span className="post-username">
                        {post.userId.username} 
                    </span>
                    <span className="post-time">
                        {new Date( post.createdAt ).toLocaleDateString()}
                    </span>
                </div>
            </div>
            <div className="menu-bar">
                <CiMenuKebab className='menu-bar-icon'/>
            </div>
        </div>
        <div className="post-image">
            <img src={post.imageUrl} alt='image not provide' className='post-content'/>
        </div>
        <div className="card-bottom">
            <div className="icons-card">
                <div className="like-related">
                    <span>
                        <FaHeart
                        onClick={()=>{
                            likePost(post._id)
                        }}
                        className={`${post.isLiked?"liked-post":" "}`}/>
                        <p>{likespostonClikc}</p>
                    </span>
                    <span><FaRegComment/><p>{50}</p></span>
                    <span><FaShareAlt/><p>{50}</p></span>
                </div>
                <span><CiBookmark/></span>
            </div>
            <div className="comment-box">
                <textarea placeholder='send message' className='comment-text'/>
                <button>send</button>
            </div>
        </div>
    </div>
  )
}

export default Post
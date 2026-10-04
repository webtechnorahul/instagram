
import { config } from '../config/config.js';
import likeModel from '../models/like.model.js';
import postModel from '../models/post.model.js'
import ImageKit,{toFile} from '@imagekit/nodejs'
import jwt from 'jsonwebtoken'
const imagekit=new ImageKit({
    privateKey:config.IMAGEKIT_PRIVATE_KEY
})
export async function createPost(req,res){
    const userId=req.user;
    const file=await imagekit.files.upload({
        file:await toFile(req.file.buffer,'file'),
        fileName:'test',
        folder:'test'
    })
    const newPost=await postModel.create({
        userId:userId,
        imageUrl:file.url,
        caption:req.body.caption
    })
    res.status(201).json({message:"post send successfully",post:newPost})
}

export async function allPost(req,res) {
    const userId=req.user;
    const allpostData=await Promise.all((await postModel.find().populate('userId').lean()).map(async(post)=>{
        
        const isLiked=await likeModel.findOne({userId,postId:post._id})
        post.isLiked=Boolean(isLiked);
        return post;
    }));
    if(!allpostData){
        res.status(404).json({message:"post not found"})
    }
    res.status(200).json({message:"fetch all post",post:allpostData})
}

export async function getMyPost(req,res){
    const userId=req.user;
    const findMyPost=await postModel.find({userId:userId})
    if(!findMyPost){
        res.status(404).json({message:'post not found'});
    }

    res.status(200).json({message:"fetch successful",post:findMyPost})
}

export async function postDetail(req,res){
    const userId=req.user;
    const postId=req.params.id;
    const post=await postModel.findOne({_id:postId});
    if(!post){
        res.status(404).json({message:"not found"});
    }

    const isVaildUser=post.userId.toString()===userId;
    if(!isVaildUser){
        res.status(403).json({message:"forbidden access"});
    }
    res.status(200).json({message:"fetch post details",post:post});
}
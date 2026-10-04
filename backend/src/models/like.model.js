import mongoose from "mongoose";

const likeSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:[true,"user id is required"]
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        require:[true,"post id is required"]
    }
},{timestamps:true})

likeSchema.index({userId:1,postId:1},{unique:true});

const likeModel=mongoose.model("like",likeSchema);

export default likeModel
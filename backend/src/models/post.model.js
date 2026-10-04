import mongoose from "mongoose";

// Defines the author, image URL, and caption saved for each post.
const postSchema=mongoose.Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:[true,"user not register"],
    },
    imageUrl:{
        type:String,
        require:[true,"image url not provide"],
    },
    caption:{
        type:String,
        default:''
    }
},{
    timestamps:true  
})

const postModel=mongoose.model("post",postSchema);

export default postModel
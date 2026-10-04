import mongoose from 'mongoose'

const followSchema=mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:[true,"follower id not provides"],
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:[true,"you are not login"],
    }
},{timestamps:true})

followSchema.index({follower:1,followee:1},{unique:true});

const followModel=mongoose.model("follow",followSchema);

export default followModel
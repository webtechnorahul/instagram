import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    require: [true, 'Username is required'], 
    unique: [true,"username already exist"] 
  },
  mobile: { 
    type: String, 
    require: [true, 'Mobile number is required'] 
  },
  email: { 
    type: String, 
    require: [true, 'Email is required'],
    unique: [true,"email already exist"]
  },
  password:{
    type:String,
    require:[true,"password not enter"],
    select:false
  },
  profileImg: { 
    type: String, 
    default: 'https://ik.imagekit.io/pfhclblv5/shared/usericon.png?updatedAt=1773069247849' 
  }
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;

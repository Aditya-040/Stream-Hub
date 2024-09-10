import mongoose,{Schema} from "mongoose";

const commentschema=new Schema({
    content:{
        type:String,
        required:true,
        trim:true,
        id:true
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'video'
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    timestamp:true
    
    })
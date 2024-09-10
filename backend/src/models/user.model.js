import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userschema=new Schema({
    username:{
        type:String,
        index:true,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
       index:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        trim:true,
    },
    avatar:{
        type:String,//cloudinary url
        required:true,
        default:'https://res.cloudinary.com/djxkexzvz/image/upload/v1632651169/avatars/default_avatar.png'
    },
    coverimg:{
        type:String,

        default:'https://res.cloudinary.com/djxkexzvz/image/upload/v1632651169/avatars/default_cover.png'
    },
    whatchhistory:[{
        type:mongoose.Schema.Types.ObjectIT,
        ref:'video'

    }],
    refreshtoken:{
        type:String,
        
    },
 
    
},{ timestamps:true});

export const user= mongoose.model('user',userschema);
import asyncHandler from "../utils/asynchandler.js";
import { apierr } from "../utils/Apierrorhandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import APIresponse from "../utils/Apiresponsehandler.js";

const registerUser=asyncHandler(async(req,res)=>{
    
    //get user details from frontend
    //validation empty, email, password, username
    //cehck if user already exists:usersname
    //check for images and avatar
    //upload them to cloudnary,avatar
    //create user object-create entry in db
    //remove password and refresh token field from respone
    //check for user createion
    //return res,or error 

     const {fullName,email,username,password}=req.body; 
     console.log(email,password);
     if([fullName,email,username,password].some(((field)=>field?.trim()===''))){
        throw new (apierr(400,"All fields are required"));
      }
     const existedUser= User.findOne({$or:[{email},{username}]});
     if(existedUser){
        throw new (apierr(409,"User already exists"));
     }

     const avatarLocalPath=req.files?.avatar[0]?.path;
     const coverImgLocalPath=req.files?.coverimages[0]?.path;
     if(!avatarLocalPath){
        throw new (apierr(400,"Avatar is required"));
     }
     const avatar=await uploadOnCloudinary(avatarLocalPath);
     const coverImage=await uploadOnCloudinary(coverImgLocalPath);
     if(!avatar){
        throw new (apierr(400,"Error in uploading avatar"));
     }

     const user=await User.create({
        fullName,
        email,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        password,
        username:username.toLowerCase(),
     })

     const createduser= await User.findById(user._id).select("-password -refreshToken");
        if(!createduser){
            throw new (apierr(500,"Error in creating user !!"));
        }

        return res.status(201).json(
            new APIresponse(201,"User created successfully",createduser)
        )

 
})

export {registerUser};
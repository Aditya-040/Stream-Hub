import asyncHandler from "../utils/asynchandler.js";
import { apierr } from "../utils/Apierrorhandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import APIresponse from "../utils/Apiresponsehandler.js";


const generateAccenssAndRefreshToken=async (userId)=>{
    try{
        const user=await User.findById(userId);
        const accesstoken=await user.generateAccessToken();
        const refreshtoken=await user.generateRefreshToken();
        user.refreshToken=refreshtoken;
        return {accesstoken,refreshtoken};
    }catch(error){
        throw new apierr(500,"Error in generating tokens");
       
    }
}

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
     const existedUser= await User.findOne({$or:[{email},{username}]});
     if(existedUser){
        throw new apierr(409,"User already exists");
     }

     const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
     let coverImageLocalPath;
     if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0){
         coverImageLocalPath=req.files.coverImage[0].path;
     }
     if(!avatarLocalPath){
        throw new apierr(400,"Avatar is required");
     }
     const avatar=await uploadOnCloudinary(avatarLocalPath);
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);
    
      
  
     if(!avatar){
        throw new apierr(400,"Error in uploading avatar!!!");
     }

     const user=await User.create({
      username:username.toLowerCase(),
        email,
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        password,
      
     })

     const createduser= await User.findById(user._id).select("-password -refreshToken");
        if(!createduser){
            throw new (apierr(500,"Error in creating user !!"));
        }

        return res.status(201).json(
            new APIresponse(201,"User created successfully",createduser)
        )

 
})

const loginUser=asyncHandler(async(req,res)=>{
   //get user details from frontend from req body
   //find user or email
   //check if user exists
   //compare password
   //generate access and refresh token
   //send cookies 
   //return response
   const {email,username,password}=req.body;
   if(!(email || username)){
       throw new apierr(400,"Email or username are required");
   }
   if(!password){
       throw new apierr(400,"Password is required");
   }
   const user=await User.findOne({$or:[{email},{username}]});
   if(!user){
       throw new apierr(404,"User not found");
   }
   const ispasswordvalid=await user.isPasswordCorrect(password);
   if(!ispasswordvalid){
       throw new apierr(401,"Invalid password");
   }

})

export {registerUser};
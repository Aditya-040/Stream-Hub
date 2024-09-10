
export const asynchandler=(fn)=>async (req,res,next)=>{
    try{
        await fn(req,res,next);
    }catch(err){
        res.status(err.code||500,err.json({success:false,
            message:err.message||"Something went wrong!!"}))
    }
}


const asynchandler=(asynchandle)=>(req,res,next)=>{
    Promise.resolve(asynchandle(req,res,next)).catch((err)=>next(err));
}
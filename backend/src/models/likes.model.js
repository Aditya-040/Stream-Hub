import mongoose,{Schema} from 'mongoose'


const likeschema=new Schema({
    comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
        
    },
    likedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'video'
    },
    tweet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'tweet'
    },
    
        timestamps:true
    

})


export default mongoose.model('like',likeschema);

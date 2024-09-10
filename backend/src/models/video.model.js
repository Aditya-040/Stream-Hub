import mongoose,{Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const videoschema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    duration:{
        type:Number,
        required:true,
    },

    thumbnail:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    likes:{
        type:Number,
        default:0,
    },
    dislikes:{
        type:Number,
        default:0,
    },
    views:{
        type:Number,
        default:0,
    },
    ispublishtd:{
        type:Boolean,
        default:true,
    },
    comments:{
        type:Schema.Types.ObjectId,
        ref:'comment'
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
   
},{
    timestamps:true
});


videoschema.plugin(mongooseAggregatePaginate);
export default mongoose.model('video',videoschema);
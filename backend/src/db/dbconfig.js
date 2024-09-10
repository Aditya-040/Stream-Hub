import mongoose from "mongoose";
import { dbname } from "../constants.js";

export const dbconnect =async () => {

    try{
       const connectioninst= await mongoose.connect(`${process.env.MONGO_URI}/${dbname}`)
         console.log(`Database connected to ${connectioninst.connection.host}`);
    }catch(err){
        console.error("MONGO Connection failed!!",err);
        process.exit(1);
    }
}



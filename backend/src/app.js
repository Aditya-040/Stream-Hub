import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";



export const app=express()
app.use(cors(
    
));
app.use(express.json({limit:'16kb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));

// routes imports
import userRoutes from "./routes/user.routes.js";


// routes declaration
app.use('/api/v1/users',userRoutes);


app.get('/',(req,res)=>{
    res.send(`welcome its home page`)
})
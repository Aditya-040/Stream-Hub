import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";



export const app=express()
app.use(cors(
    {
        origin:Process.env.COROS_ORIGIN,
        Credential:true
    }
));
app.use(express.json({limit:'16kb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.send(`welcome its home page`)
})
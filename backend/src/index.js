import 'dotenv/config'
import { dbconnect } from './db/dbconfig.js'
import { app } from './app.js';
import { PORT } from './constants.js'



dbconnect()
.then(()=>{
    app.on('error',(err)=>{
        console.log(`error in starting server`,err);
    })
    app.listen(PORT|| 8000,()=>{
        console.log(`Server is running on port ${PORT}`);
})
    console.log("Database connected successfully!!");

})
.catch((err)=>{
    console.error("Database connection failed!!",err);
    process.exit(1);
})
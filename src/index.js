const express=require('express');

require('dotenv').config();

const  PORT=process.env.PORT;
console.log(PORT);
const appService=()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server is listening at ${PORT}` );
    })
    
}

appService();
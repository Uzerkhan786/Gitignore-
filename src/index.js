const express=require('express');



const {PORT}=require('./config/env')
console.log(PORT);
const appService=()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server is listening at ${PORT}` );
        
    })
    
}

appService();
const dotenv=require('dotenv');

dotenv.config();
//taking env from .env file and hiding 
module.exports={
    PORT:process.env.PORT
}
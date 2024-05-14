import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const database = process.env.MONGODB_URI;
export const Connection=async()=>{
     
      try {
        await mongoose.connect(database);    
        console.log("database connect Succssfully...")
      } catch (error) {
            console.log(error);
      }
}


export default Connection;
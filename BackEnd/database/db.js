import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const database = process.env.DATABASE;
export const Connection=async()=>{
      const Url='mongodb+srv://vishal:vishalpote>@ecommerce.0m0yohg.mongodb.net/?retryWrites=true&w=majority'
      try {
        await mongoose.connect("mongodb://localhost/flipkart");    
        console.log("database connect Succssfully...")
      } catch (error) {
            console.log(error);
      }
}


export default Connection;
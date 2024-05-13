import mongoose from "mongoose";

const UserSignup=new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },username:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    }
})

const Signup=mongoose.model('Signup',UserSignup);

export default Signup;
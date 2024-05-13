import Signup from "../model/user_schema.js";



export const usersignup=async(req,res)=>{
    try {
        const userexist=await Signup.findOne({username:req.body.username});
        if(userexist){
           return res.status(401).json({message:"Username Already Exists"});
        }
        const user=req.body;
        const newuser=await Signup.create(user)
        await newuser.save();

       return res.status(200).json({message:"User Created Successfully..!!",data:newuser});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


export const userLogin=async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user=await Signup.findOne({username,password});

        if(!user){
            return res.status(404).json({message:"User Not Found..!!"});
        }

        return res.status(200).json({message:"User Login Successfully..!!",data:user})
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error..!!"+error.message});
    }
}
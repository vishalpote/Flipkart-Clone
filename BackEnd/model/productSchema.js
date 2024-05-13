import mongoose from "mongoose";

const producschema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detaiurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    desciption:String,
    discount:String,
    tagline:String,
});


const Product=mongoose.model("Product",producschema);

export default Product;
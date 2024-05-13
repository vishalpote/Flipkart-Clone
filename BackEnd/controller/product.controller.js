import Product from "../model/productSchema.js";


export const productData=async(req,res)=>{
    try {
        const product= await Product.find({});

        if(!product){
            return res.status(404).json({message:"No Product Available..!!"});
        }
        return res.status(200).json({message:"Product Deatils",product});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error..!!",error});
    }
}


export const getOneProduct=async(req, res) => {
    try {
        const id=req.params.id;
        const product=await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found..!!"});
        }
        // console.log(product)
        return res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"Internal Server Error..!!",error});
    }
}
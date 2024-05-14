import {products} from './constant/data.js'
import product from './model/productSchema.js'


const DefaultData=async()=>{
    try {
       await product.insertMany(products)
        console.log("Data Imported successfully..!!")
    } catch (error) {
        console.log(error.message)
    }
}


export default DefaultData;
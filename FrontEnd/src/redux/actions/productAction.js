import axios from "axios";
import { oneProductRoute, productRoute } from "../../utils/apiRoutes";
import * as actionType from '../constants/productConstant';

export const getProducts=()=>async(dispatch)=>{
    try {
        const {data} = await axios.get(productRoute);
        // const data=res.products.product;
        console.log(data);
        dispatch({type:actionType.GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        // console.log("Error While Fetching API..!!");
        dispatch({type:actionType.GET_PRODUCT_FAIL,payload:error.message})
    }
}


export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        const {data}=await axios.get(`${oneProductRoute}/${id}`)

        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAIL,payload:error.message});
    }
}
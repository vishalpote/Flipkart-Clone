import axios from 'axios';
import { productRoute } from '../../utils/apiRoutes';
import * as actionType from '../constants/cartConstatant'

export const addTocart=(id,quantity)=>async(dispatch)=>{
    try {
        const {data}=await axios.get(`${productRoute}/${id}`);

        dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}});
    } catch (error) {
        dispatch({type:actionType.ADD_TO_CART_ERRROR,payload:error.message});
    }
}


export const removeTocart=(id)=>(dispatch)=>{
    dispatch({type:actionType.REMOVE_FROM_CART,payload:id});
}

// export const incrementQuantity=(id,quantity)=>(dispatch)=>{
//         dispatch({type:actionType.INCREMENT_QUANTITY,payload:{id,quantity}});
// }
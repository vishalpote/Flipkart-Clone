import axios from 'axios';
import { host, oneProductRoute } from '../utils/apiRoutes';


export const authnaticationSignup=async(data)=>{
    try {
       return await axios.post(`${host}/signup`,data)
    } catch (error) {
        console.log(error.message);
    }
}


export const payUsingPaytem=async(data)=>{
    try {
        const res=await axios.post(`${oneProductRoute}/payment`,data);
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}
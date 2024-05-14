import axios from 'axios';
import { oneProductRoute } from '../utils/apiRoutes';

const URL='http://localhost:8080';

export const authnaticationSignup=async(data)=>{
    try {
       return await axios.post(`${URL}/signup`,data)
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
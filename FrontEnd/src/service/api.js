import axios from 'axios';

const URL='http://localhost:8080';

export const authnaticationSignup=async(data)=>{
    try {
       return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log(error.message);
    }
}
import axios from 'axios';
import config from '../config/config';


const signup = async(data)=>{
    try {
        const result = await axios.post(`${config.domain}/auth/signup`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const signin = async(data)=>{
    try {
        const result = await axios.post(`${config.domain}/auth/login`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const profile = async()=>{
    axios.defaults.headers.common = {'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`}
    try {
        const result = await axios.get(`${config.domain}/profile`);
        return result;    
    } catch (error) {
        return error;
    }
}

export default {
    signin,
    signup,
    profile
}
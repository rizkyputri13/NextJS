import axios from 'axios'
import { domain } from '../config/config'

const List = async()=>{
    try {
        const result = await axios.get(`${domain}/api/country/`)
        const data = result.data
        return data
    } catch (error) {
        return await error.message
    }
}

const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${domain}/api/country/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try {
        const result = await axios.post(`${domain}/api/country/`,payload)
        console.log(payload);
        return result
    } catch (error) {
        return await error.message
    }
}
const Update = async(data)=>{
    try {
        const result = await axios.put(`${domain}/api/country/${data.countryId}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const UpdateFile = async(data)=>{
    const id = parseInt(data.get('countryId'))
    try {
        const result = await axios.put(`${domain}/api/country/${id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${domain}/api/country/${id}`)
        return result.data 
    } catch (error) {
        return await error.message
    }
}
export default {List,Delete,Create,Update,FindOne,UpdateFile}
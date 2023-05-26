import { BASE_URL } from "./baseURL";
import axios from "axios";
export const GetAll =async(name)=>{
    let URL;
    let GlobalData;
    if(!name){
        URL = BASE_URL+ '/lists'
    }else{
        URL = BASE_URL + `/lists/?name=${name}`
    }
    await axios.get(URL).then(res=>{
        GlobalData =  res.data
    })
    return GlobalData
}

export const GetById = async(id)=>{
    let GlobalData
    await axios.get(`${BASE_URL}/lists/${id}`).then(res=>{
        GlobalData = res.data
    })
 return GlobalData
} 

export const PostById = (payload)=>{
     axios.post(`${BASE_URL}/lists`, payload)
}

export const DeleteById = id=>{
    axios.delete(`${BASE_URL}/lists/${id}`)
}
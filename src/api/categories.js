import {GET} from "../api/index"
import { CATEGORIES } from "../constants/api"

export const getAllCategories=(callback,acccessToken)=>{
    
    GET(CATEGORIES,(data)=>{
        
        callback(data)
    },acccessToken)
}

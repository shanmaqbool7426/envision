import {GET} from "../../api/index"
import { ARTICLES } from "../../constants/api"
import { GET_ARTICLES } from "../../constants/api"


export  const getAllArticls=(callback,acccessToken)=>{
    
    GET(ARTICLES,(data)=>{
        callback(data)
    },acccessToken)
}

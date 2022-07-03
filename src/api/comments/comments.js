import {GET, POST} from "../../api/index"
import {GET_COOMENTS,ADD_COOMENTS} from "../../constants/api"

export const getAllComments=(id,callback,acccessToken)=>{
    const UPDATE_GET_COOMENTS=GET_COOMENTS.replace('id',id)
    GET(UPDATE_GET_COOMENTS,(data)=>{
        callback(data)
    },acccessToken)
}

export const addComments=(data,callback,acccessToken)=>{
    POST(ADD_COOMENTS, data,(res)=>{
        callback(res)
    },acccessToken)
}

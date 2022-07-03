import { ARTICLES_DETAIL } from "../../constants/api.js"
import { GET } from "../index.js"

export  const detailArticles=(id,callback,acccessToken)=>{
    const UPDATE_ARTICLES_DETAIL = ARTICLES_DETAIL.replace('id',id)
        GET(UPDATE_ARTICLES_DETAIL,(data)=>{
            callback(data)
        },acccessToken)
    }
    
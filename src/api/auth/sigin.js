import React from "react"

import {POST} from "../../api/index"
import {CLIENT_SIGNIN } from  "../../constants/api"
import { getloginData } from "../../redux/actions/actions"
export const Signin=(data,callback)=>{

    POST(CLIENT_SIGNIN,data,(res)=>{
        callback(res)
    })
}
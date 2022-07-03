import React from 'react'

import { POST } from '../../api/index'
import { CLIENT_SIGNUP } from '../../constants/api'
export const Signup = (data, callback) => {
  POST(CLIENT_SIGNUP, data, res => {
    callback(res)
  })
}

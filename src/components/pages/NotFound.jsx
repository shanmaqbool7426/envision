import React from 'react'
import { useHistory } from 'react-router-dom'
const NotFound = () => {

  const history=  useHistory()

  return (
    <>
    <div className='d-flex align-items-center  justify-content-center notfound flex-column' >
    <h1>404 Error</h1>
    <p className='my-3'>We are sorry, the page you've requested is not available.</p>
    <button  onClick={()=>history.push('/')} type="button" class="btn btn-outline-warning BACK-TO-HOMEPAHE">BACK TO HOMEPAHE</button>

    </div>
    </>
  )
}

export default NotFound
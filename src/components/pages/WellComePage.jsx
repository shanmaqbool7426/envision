import React from 'react'
import "../../assets/css/wellcom.css"
import { useHistory } from 'react-router-dom';

const WellComePage = () => {
const history= useHistory()
  const authHandler=(link)=>{
    history.push(link)
  }

  return (
    <>
      <div className='wellcom-container'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.webp`} alt="logo" className='logo'/>
        <p className='guid my-3'>Your Guide To 360</p>
        <h2 className='well-being'>WELL- BEING</h2>
        <p className='wellness my-4'>It’s wellness reimagined</p>
        <button type="button" class="btn btn-light my-3" onClick={()=>authHandler(`${process.env.PUBLIC_URL}/auth/login`)}>Sign In</button> 
        <button type="button" class="btn btn-outline-secondary my-4 " onClick={()=>authHandler(`${process.env.PUBLIC_URL}/auth/signup`)}>Sign Up</button> 
      
      
        {/* <p className='' onClick={skiphandler}>Skip</p> */}
      </div>
    </>
  )
}

export default WellComePage
import React, { useState } from 'react'
import '../../../assets/css/splash.css'
const SplashModal = ({ modalHandler, indexing, data ,nextHandler }) => {
  return (
    <>
      <div className='cutom-card cards mt-5 p-3 mb-5'>
        <div className='card-body splash-screen'>
          <div style={{minHeight: "auto"}} className="splash-img-container mb-4">
            <img className='splash-img'
              src={`${process.env.PUBLIC_URL}/assets/images/splashImages/splashImg_${indexing}.webp`}
            />
          </div>
          <h5 >{data.heading}</h5>
          <hr className='splash-hr' />
          <p >{data.detail}</p>
          <h6 >{data.description}</h6>
          <div className='notify'>{data.notify && data.notify}</div>
          <button className='splash-modal-btn' onClick={modalHandler}>
            Next
          </button>       
        </div>
      </div>
      <br />
    </>
  )
}

export default SplashModal

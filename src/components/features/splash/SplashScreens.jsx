import React, { useState } from 'react'
import SplashModal from './SplashModal'
import { useHistory } from 'react-router-dom';
import logo from "../../../assets/images/logo.webp"
import HeaderContainer from '../headerContainer';
const data = [
   {heading: "My Personal Body Blueprint", detail: "Monitor your health, vitals, stress, and body composition with Leona", description: "It’s YOUR body!" }, 
   { heading: "Facial Scan", detail: "Easily track your health with contactless vitals! Scan the blood flow in your face and find out your blood pressure, heart attack risk and more in just 30 seconds.", description: "Be the CEO of YOUR Body" }, 
   { heading: "My Energy", detail: "Track your water, your food, your moves easily, simply, naturally! Learn about nutrients, minerals and more as they relate to you.", description: "It’s YOUR body!" }, 
   { heading: "My Community", detail: "Be part of the  EnvisionWell Community. Join challenges and participate in conversations designed to help you B360Well", description: "It’s YOUR body!" },
   { heading: "My Articles and My Edutainment", detail: "Gain knowledge, listen to faves and stay tuned in to all areas of your 360° Well-Being", description: "It’s Your Life!" }, 
   { heading: "My Journal and My Motivations", detail: "Stay motivated to track your goals, connect with 10 Pillars of 360 Well-Being and record how you feel every day.", des: "It’s YOUR Life!" },
   { heading: "B360Well Score", detail: "Get in the B360Game to compete against yourself and others while striving to B360Well.", description: "" },
   { heading: "TeleWellness", detail: "Find practitioners for all your health and wellness needs for support and to keep you on track.", description: "It’s YOUR body!" },
   { heading: "KSAA Knowledge, Support Access, Autonomy", detail: "One Resource for Your Body Your Health Your Data Your Life", description: "It’s an app worth living in!" , notify:"*EnvisionWell is HIPAA compliant, and your information is private, secure and isn’t shared or sold. EnvisionWell Privacy Statement" },
   { heading: "Let’s Get Started", detail: "Begin your journey with EnvisionWell. You’re on a path designed to support a personalized experience for you to B360 Well. The onboarding requested is needed to provide you with the best experience. ", description: "" , notify:"*EnvisionWell is HIPAA compliant, and your information is private, secure and isn’t shared or sold. EnvisionWell Privacy Statement" },
  
  ]

const SplashSecreen = () => {
  const [indexing, setIndexing] = useState(0)
  const history = useHistory()
  const modalHandler = () => {
    const countScreen = data.length - 1
    indexing <( countScreen && setIndexing(indexing + 1)) ||( indexing >= countScreen) && history.push(`${process.env.PUBLIC_URL}/welcome`)
  }
  const nextHandler = () => {
    history.push(`${process.env.PUBLIC_URL}/welcome`)
  }
  return (
    <>
      <HeaderContainer>
        <div className='splash-content'>
          <img className='logo' src={logo} alt="" width={180} height={40} />
          <p className='skip' onClick={nextHandler}>Skip</p>
        </div>
        {data[indexing] && <SplashModal
          nextHandler={nextHandler}
          setIndexing={setIndexing}
          modalHandler={modalHandler}
          data={data[indexing]}
          indexing={indexing} />}
      </HeaderContainer>
    </>
  )
}

export default SplashSecreen
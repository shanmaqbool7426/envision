import React from 'react';
import "../../../assets/css/login.css"
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { getLoginData } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GET, POST } from '../../../api';
import { SOCIAL_LOGIN } from '../../../constants/api';
import { FACEBOOK_API_KEY } from '../../../config';

const SocialLogin = ({ settoast }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const resSuccessGoogle = async (googleRes) => {
    console.log(">>>>> res respose", googleRes)
    GET("https://www.googleapis.com/auth/userinfo.profile", (data) => {
      console.log(">>>>> data", data)
    }, googleRes.access_token)

  };

  const googleLogin = useGoogleLogin({
    onSuccess: resSuccessGoogle,
    // onError: resFailureGoogle,
  });

  const handleGoogle = () => {
    googleLogin()
    // setSocialType('google')
    // setGoogleLoader(true)
  }
  const componentClicked = (response) => {
    console.log(">>> >>>>>>> componentClicked", response);
  }
  const responseFacebook = async (response) => {
    let payload = { socialMediaID: response.id, socialMediaToken: response.accessToken, socialMediaEmail: response.email, socialMediaType: 1, device: "web" }
    console.log(">>>>>>> responseFacebook", response);
    POST(SOCIAL_LOGIN, payload, (res) => {
      if (res?.data?.member) {
        res.data.isLogin = true
        history.push(`${process.env.PUBLIC_URL}/articles/list`)
        dispatch(getLoginData(res))
        settoast(true)
      }
      else {
        dispatch(getLoginData(res.data))
      }
      setTimeout(() => {
        settoast(false)
      }, 3000);
    })
    // 539551043205605
  }

  return (
    <>
      <FacebookLogin
        textButton={<i className='fa-brands fa-facebook-f px-2'></i>}
        appId={FACEBOOK_API_KEY}
        autoLoad={false}
        fields={"name,email,picture"}
        onClick={componentClicked}
        cssClass="bg-light"
        callback={responseFacebook}
      // icon={<i className='fa-brands fa-facebook-f'></i>} 
      />
      <i className='fa-brands fa-google' onClick={handleGoogle}></i>
      {/* <GoogleOAuthProvider clientId={CLIENT_ID} onClick={googleLogin}>
        <GoogleLogin
          clientId={CLIENT_ID}
        />
      </GoogleOAuthProvider>; */}
    </>
  )
}

export default SocialLogin
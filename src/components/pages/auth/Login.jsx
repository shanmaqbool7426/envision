////login////////////////////////

import React, { useState,memo } from 'react'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import { useForm } from 'react-hook-form'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useDispatch } from 'react-redux'
import logo from '../../../assets/images/logo.webp'
import { Link, useHistory } from 'react-router-dom'
import PasswordIcon from '../../../assets/images/password-field-iconline.png'
import MaiilIcon from '../../../assets/images/email-field-iconline.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import SocialLogin from './SocialLogin'
import HeaderContainer from '../../features/headerContainer'
import { SIGNIN } from '../../../lang/en/messages'
import { getLoginData } from '../../../redux/actions/actions'
import { EMAIL_REGEX } from '../../../constants/regex'
import Error from '../../../helper/input-field-error'
import '../../../assets/css/login.css'
import { Signin } from '../../../api/auth/sigin'

 function LoginForm() {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [toast, settoast] = useState(false)
  const [status, setstatus] = useState('')
  const [message, setMessage] = useState('')
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    let payload = {
      email: data.email,
      password: data.password,
      device: 'web',
      playerId: ''
    }

    Signin(payload, res => {

      if (res?.data?.member) {
        res.data.isLogin = true
        setMessage("Login successfully.")
        setstatus("success")
        history.push(`${process.env.PUBLIC_URL}/articles/list`)
        dispatch(getLoginData(res))

      } else {
        console.log(">>> error handle", res)
        dispatch(getLoginData(res.data))
        setMessage(res.data)
        setstatus("error")
      }

      res.data && settoast(true)
      setTimeout(() => {
        settoast(false)
      }, 3000)
    })
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Snackbar
        open={toast}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

      <HeaderContainer>
        <div className='splash-content'>
          <img className='auth-logo' src={logo} alt='' width={180} height={40} />
        </div>
        <div className='login-card'>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { width: '25ch' }
            }}
          ></Box>
          <h2 className='m-auto py-4'>Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='pos-rel input-field-style my-3'>
              <img src={MaiilIcon} alt='' className='input-filed-icon' />
              <TextField error={errors && errors.email && true} margin='normal' label='Email' name='email' autoComplete='off' variant='outlined' fullWidth  {...register('email', { required: true, pattern: EMAIL_REGEX })}
              />
            </div>

            {errors.email && errors.email.type !== 'pattern' && (
              <Error message={SIGNIN.email.reqvalid} />
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <Error message={SIGNIN.email.invalid} />
            )}

            <div className='pos-rel input-field-style'>
              <img src={PasswordIcon} alt='' className='input-filed-icon-psw' />
              <FormControl variant="outlined" fullWidth sx={{ m: 1 }} className="input-passowrd">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput error={errors && errors.password && true} label='Password' margin='normal' name='password' autocomplete='off' type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register('password', { required: true })}
                />
              </FormControl>
            </div>

            {errors.password && errors.password.type !== 'pattern' && (
              <Error message={SIGNIN.password.reqvalid} />
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <Error message={SIGNIN.password.invalid} />
            )}
            <div style={{ textAlign: 'right' }}>
              <a className='forget-password' href='#'>
                Forget password ?
              </a>
            </div>
            <br />

            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                {...register('checkbox', { required: true })}
                label={(<span style={{color:"#868686"}}>By creating an account you agree to our <span className='link-color'>Terms</span> and have read our <span className='link-color'>Privacy Policy</span></span>)}
              />

              {errors.checkbox && (
                <Error message={SIGNIN.req} />
              )}
            </div>
            <div class='vertical-center'>
              <div>
                <input
                  type='submit'
                  className='submit-btn my-4'
                  value='Sign In'
                />
              </div>
              <div className='pos-rel'>
                <p className='sign-in-options'> Or Sign In With</p>
                <div className='login-icons my-4'>
                  <SocialLogin />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className='no-acc--login'>
          <p>
            Don’t Have An Account? <span><Link to={`${process.env.PUBLIC_URL}/auth/signup`}>Sign Up</Link></span>
          </p>
        </div>
      </HeaderContainer>
    </>
  )
}


export default memo(LoginForm)
















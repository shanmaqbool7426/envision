import React, { useState ,memo} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getLoginData } from '../../../redux/actions/actions'
import FormControlLabel from '@mui/material/FormControlLabel'
import logo from '../../../assets/images/logo.webp'
import { Link, useHistory } from 'react-router-dom';
import PasswordIcon from '../../../assets/images/password-field-iconline.png'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import MaiilIcon from '../../../assets/images/email-field-iconline.png'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Signup } from '../../../api/auth/signup'
import { EMAIL_REGEX, PASSWORD } from '../../../constants/regex'
import '../../../assets/css/login.css'
import SocialLogin from './SocialLogin'
import Error from '../../../helper/input-field-error'
import { SIGNIN } from '../../../lang/en/messages'
import HeaderContainer from '../../features/headerContainer'
import { COUNTRY_CODE } from '../../../constants/country-code'

function SignupForm() {
  const dispatch = useDispatch()
  const [toast, settoast] = useState(false)
  const [status, setstatus] = useState('')
  const [message, setMessage] = useState('')
  const [code, setcode] = useState()

  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = data => {
    let payload = {
      "userEmail": data.userEmail,
      "userPassword": data.userPassword,
      "mobileNumber": `${code}${data.mobileNumber}`,
      "device": 'web',
      "playerId": '',
      "avatarUrl": "string",
      "isVerifiedUser": false,
      "gender": "unspecified",
      "birthDate": new Date(),
      "createdDate": "2018-12-01T07:12:11.410Z",

    }
    Signup(payload, res => {
      if (res?.data?.member) {
        res.data.isLogin = true
        setMessage("Login successfully.")
        setstatus("success")
        dispatch(getLoginData(res))
        history.push(`${process.env.PUBLIC_URL}/articles/list`)
        settoast(true)
      } else {
        setMessage(res.data)
        setstatus("error")
        dispatch(getLoginData(res.data))
      }
      res.data && settoast(true)
      setTimeout(() => {
        settoast(false)
      }, 3000)
    })
  }

  return (
    <>
      <Snackbar
        open={toast}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <HeaderContainer>

        <div className='splash-content'>
          <img className='logo' src={logo} alt='' width={180} height={40} />
        </div>
        <div className='login-card'>
          <Box  component='form'  sx={{    '& > :not(style)': { width: '25ch' }  }} ></Box>
          <h2 className='m-auto py-4'>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='pos-rel input-field-pohe d-flex w-100'>
              <select
                className='dial_code'
              onChange={(e)=>setcode(e.target.value)}
              >
                 <option value={"+1"}>+1</option>
                {COUNTRY_CODE.map((code) =>  <option value={code.dial_code}>{code.dial_code}</option>)}
              </select>

              <TextField  margin='normal'  id='phone'  type='phone'  label='Mobile No.'  name='mobileNumber'  autoComplete='off'  variant='outlined'  fullWidth  {...register('mobileNumber', {
                  required: true,
                })}
              />
            </div>
            {errors.mobileNumber && <Error message={SIGNIN.phone.req} />}
            
             <div className='pos-rel input-field-style'>
              <img src={MaiilIcon} alt='' className='input-filed-icon' />
              <TextField margin='normal' id='name' type='email' label='Email' name='userEmail' autoComplete='off' variant='outlined' fullWidth  {...register('userEmail', {  required: true,  pattern: EMAIL_REGEX})}
              />
            </div>
            {errors.userEmail && errors.userEmail.type !== 'pattern' && (
              <Error message={SIGNIN.email.reqvalid} />
            )}
            <div className='pos-rel input-field-style'>
              <img src={PasswordIcon} alt='' className='input-filed-icon-psw' />
              <FormControl variant="outlined" fullWidth sx={{ m: 1 }} className="input-passowrd">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput  label='Password'  margin='normal'  name='userPassword'  autocomplete='off'  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton  aria-label="toggle password visibility"  onClick={handleClickShowPassword}  onMouseDown={handleMouseDownPassword}  edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register('userPassword', { required: true, pattern: PASSWORD })}
                />
              </FormControl>
            </div>
            {errors.userPassword && errors.userPassword.type !== 'pattern' && (
              <Error message={SIGNIN.password.reqvalid} />
            )}
            {errors.userPassword && errors.userPassword.type === 'pattern' && (
              <Error message={SIGNIN.password.invalid} />
            )}
            <br />
            <div>
              
              <FormControlLabel  name='checkbox'  {...register('checkbox', { required: true })}  control={<Checkbox  />}  label={(<span>By creating an account you agree to our <span className='link-color'>Terms</span> and have read our <span className='link-color'>Privacy Policy</span></span> )}   
              />
              {errors.checkbox && (
                <Error message={SIGNIN.req} />
              )}
            </div>
            <div className='vertical-center'>
              <div>
                <input  type='submit' className='submit-btn my-4'  value='Sign Up'
                />
              </div>
              <div className='pos-rel'>
                <p className='sign-in-options'> Or Sign In With</p>
                <div className='login-icons my-4'>
                  <SocialLogin />

                </div>
              </div>
              <p className='sign-up-info'>
                {' '}
                After creating an account, check your amail for important
                information
              </p>
            </div>
          </form>
        </div>

        <div className='no-acc--login'>
          <p>  Don’t Have An Account? <span><Link to={`${process.env.PUBLIC_URL}/auth/login`}>Sign In</Link></span> </p>
        </div>
      </HeaderContainer>
    </>
  )
}

export default memo(SignupForm)
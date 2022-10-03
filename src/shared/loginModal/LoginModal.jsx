import React, { useContext, useState } from 'react'
import { ModalContext } from '../../App';
import { loginUser, signIn, useAuthDispatch } from '../../context/auth';
import './LoginModal.scss'
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from 'react-icons/ai';
import { Box, Button, Divider, styled, TextField, Typography } from '@mui/material';

const StyledBox = styled('form')(({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  minWidth: "90%",
  gap: 20,
}));

const StyledTextField = styled(TextField)(({
  backgroundColor: '#fafafa'
}));


const LoginModal = ({ modalValue, setLogin }) => {

  const handleModal = useContext(ModalContext);
  const navigate = useNavigate();

  const formInitialState = {
    email: "leanejoye@leane.com",
    password: "12345"
  };

  const dispatch = useAuthDispatch();
  const [loginForm, setLoginForm] = useState(formInitialState);

  const [loginBtn, setLoginBtn] = useState(false);

  const handleBtnLogin = () => {
    setLoginBtn(!loginBtn)
  };

  const handleLoginForm = (event) => {
    const { name, value } = event.target;
    setLoginForm(formPrevState => ({ ...formPrevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('hola soy un form')
    // handleModal()

    // try {
    //   if (loginBtn) {
    //     await signIn(dispatch, loginForm)
    //   } else {
    //     await loginUser(dispatch, loginForm)
    //   }
    //   setLogin()
    //   navigate("/profile/personal-info")
    // } catch (error) {
    //   console.log(error);
    // }
  };


  return (
    <div>
      <div className={modalValue ? 'modalContainer modalContainer--active' : 'modalContainer'}>
        <AiFillCloseCircle className='modalContainer__close' onClick={handleModal} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: '2rem' }}>
          <Typography variant="h6" component="p" color="initial">

            HELLO! Welcome Back
          </Typography>
          <Typography variant="subtitle2" component="p" color="GrayText">
            Enter your credentials to continue
          </Typography>
        </Box>

        <StyledBox onSubmit={handleLogin}>

          <StyledTextField
            id="outlined-required"
            name='email'
            label="email"
            onChange={handleLoginForm}
            value={loginForm.email}
          />
          <StyledTextField
            id="outlined-password-input"
            label="Password"
            name='password'
            type="password"
            autoComplete="current-password"
            onChange={handleLoginForm}
            value={loginForm.password}
          />
          <StyledTextField
            id="outlined-password-input"
            label="Password"
            name='password'
            type="password"
            autoComplete="current-password"
            onChange={handleLoginForm}
            value={loginForm.password}
          />
          <Button size="large" variant="contained" type='submit'>{loginBtn ? 'create account' : "login"}</Button>
        </StyledBox>
        <Box sx={{ px: '2rem', textAlign: 'center' }}>
          <Divider />
          <Typography variant="body1" component="p" color="initial" onClick={handleBtnLogin} sx={{ p: "1rem", cursor: 'pointer' }}>
            {loginBtn ? 'i already have an account' : 'Create an account'}
          </Typography>
        </Box>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default LoginModal
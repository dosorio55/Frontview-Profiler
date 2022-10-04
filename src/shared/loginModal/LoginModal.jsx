import React, { useContext, useState } from 'react'
import { ModalContext } from '../../App';
import { loginUser, signIn, useAuthDispatch } from '../../context/auth';
import './LoginModal.scss'
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from 'react-icons/ai';
import { Box, Button, Divider, styled, TextField, Typography } from '@mui/material';
import Login from './Login';
import Register from './Register';

const StyledBox = styled('form')(({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  minWidth: "90%",
  gap: 20,
}));

const LoginModal = ({ modalValue, setLogin }) => {

  const handleModal = useContext(ModalContext);
  const navigate = useNavigate();

  const formInitialState = {
    email: "leanejoye@leane.com",
    password: "12345",
    confirmPassword: ""
  };

  const dispatch = useAuthDispatch();
  const [loginForm, setLoginForm] = useState(formInitialState);
  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState(false);

  const handleBtnLogin = () => {
    setLoginState(!loginState)
  };

  const handleLoginForm = (event) => {
    const { name, value } = event.target;
    setLoginForm(formPrevState => ({ ...formPrevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (loginState) {
        await signIn(dispatch, loginForm)
      } else {
        await loginUser(dispatch, loginForm)
      }
      setLoading(false)
      setLogin()
      handleModal()
      navigate("/profile/personal-info")
    } catch (error) {
      console.log(error);
    }
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
          {loginState ?
            <Register handleLoginForm={handleLoginForm} loginForm={loginForm} />
            : <Login loading={loading} handleLoginForm={handleLoginForm} loginForm={loginForm} />}
        </StyledBox>
        <Box sx={{ px: '2rem', textAlign: 'center' }}>
          <Divider />
          <Typography variant="body1" component="p" color="initial" onClick={handleBtnLogin} sx={{ p: "1rem", cursor: 'pointer' }}>
            {loginState ? 'i already have an account' : 'Create an account'}
          </Typography>
        </Box>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default LoginModal
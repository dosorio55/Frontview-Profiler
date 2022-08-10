import React, { useContext, useState } from 'react'
import { ModalContext } from '../../App';
import { loginUser, signIn, useAuthDispatch } from '../../context/auth';
import './LoginModal.scss'
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from 'react-icons/ai';
import { Box, Button, Divider, styled, TextField, Typography } from '@mui/material';

const StyledBox = styled(Box)(({
  display: "flex",
  flexDirection: "column",
  // gap: 30,
  margin: "0 auto",
  minWidth: "90%"
}));


const LoginModal = ({ modalValue, setLogin }) => {

  const handleModal = useContext(ModalContext);
  const navigate = useNavigate();

  const formInitialState = {
    email: "",
    password: ""
  };

  const dispatch = useAuthDispatch();
  // const userState = useGetState();
  const [loginForm, setLoginForm] = useState(formInitialState);

  const [loginBtn, setLoginBtn] = useState(false);

  const handleBtnLogin = () => {
    setLoginBtn(!loginBtn)
  };

  const handleLoginForm = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    handleModal()

    try {
      if (loginBtn) {
        await signIn(dispatch, loginForm)
      } else {
        await loginUser(dispatch, loginForm)
      }
      setLogin()
      navigate("/network")
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='container'>
      <div className={modalValue ? 'modalContainer modalContainer--active' : 'modalContainer'}>
        <AiFillCloseCircle className='modalContainer__close' onClick={handleModal} />
          <Typography component={'span'} variant={'h6'} sx={{margin: "auto"}}>
            Login
          </Typography>

        <StyledBox >
          <TextField
            id="outlined-required"
            name='email'
            label="email"
            sx={{ margin: ".5rem 0" }}
            // defaultValue="email@example.com"
            onChange={handleLoginForm}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            sx={{ margin: ".5rem 0" }}
            name='password'
            type="password"
            autoComplete="current-password"
            onChange={handleLoginForm}
          />
        </StyledBox>
        <Button size="large" variant="contained" sx={{ margin: "2rem auto"}} onClick={handleLogin}>{loginBtn ? 'create account' : "login"}</Button>
        <p onClick={handleBtnLogin}>{loginBtn ? 'i already have an account' : 'Create an account'}</p>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default LoginModal
import React, { useContext, useState } from 'react'
import { ModalContext } from '../../App';
import { loginUser, signIn, useAuthDispatch } from '../../context/auth';
import './LoginModal.scss'
import { useNavigate } from "react-router-dom";


const LoginModal = ({ modalValue, setLogin }) => {

  const handleModal = useContext(ModalContext);
  const navigate = useNavigate()

  const formInitialState = {
    email: "",
    password: ""
  }

  const dispatch = useAuthDispatch();
  // const userState = useGetState();
  const [loginForm, setLoginForm] = useState(formInitialState);

  const [loginBtn, setLoginBtn] = useState(false);

  const handleBtnLogin = () => {
    setLoginBtn(!loginBtn)
  }

  const handleLoginForm = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value })
    // console.log(loginForm)
  }

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
    console.log(loginForm)
  }


  return (
    <div className='container'>
      <div className={modalValue ? 'modalContainer modalContainer--active' : 'modalContainer'}>
        <button onClick={handleModal}>handle</button>

        <div>
          <h2 className="modalContainer__item">login</h2>
        </div>
        <div className="modalContainer__line"></div>

        <label htmlFor="email">
          <p>email</p>
          <input
            className="modalContainer__item"
            name='email'
            type="text"
            id='email'
            value={loginForm.email}
            onChange={handleLoginForm}

          />
        </label>
        <label htmlFor="password">
          <p>password</p>
          <input
            className="modalContainer__item"
            name='password'
            type="password"
            id='password'
            value={loginForm.password}
            onChange={handleLoginForm}

          />
        </label>
        <button className="modalContainer__item modalContainer__btn" onClick={handleLogin}>{loginBtn ? 'create account' : "login"}</button>
        <p onClick={handleBtnLogin}>{loginBtn ? 'i already have an account' : 'Create an account'}</p>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default LoginModal
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext } from '../../App';
import { logout, useAuthDispatch } from '../../context/auth';
import { BiLogOut, BiUser } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import './Header.scss';

const Header = ({ loginValue, setLogin }) => {

  const navigate = useNavigate()

  const modal = useContext(ModalContext);
  const dispatch = useAuthDispatch()

  const handleLogout = () => {
    logout(dispatch)
    navigate("/")
    setLogin()
  }

  return (
    <header className='headerContainer'>
      <div>
        <Link className='headerContainer__link' to='/'><AiFillHome/>  Home</Link>
        {loginValue && <Link className='headerContainer__link' to='/profile'>my profile</Link>}
        {loginValue && <Link className='headerContainer__link' to='/add-profile'>add profile</Link>}
        <Link className='headerContainer__link' to='/network'>network</Link>
      </div>
      <div>
        {loginValue ? <BiLogOut onClick={handleLogout}/> : <BiUser onClick={modal}/>}
      </div>
    </header >
  )
}

export default Header
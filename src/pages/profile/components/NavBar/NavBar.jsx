import React from 'react'
import { FaUserTie, FaEdit, FaWrench} from 'react-icons/fa'
import { BiStopCircle } from 'react-icons/bi'

const NavBar = ({handleEdit, editMode}) => {
  return (
    <nav className='header__opts'>
        <a href="#none" onClick={handleEdit}>{editMode ? <BiStopCircle className='red' /> : <FaEdit /> }</a>
        <a href="#user"><FaUserTie/></a>
        <a href="#work"><FaWrench/></a>
    </nav>
  )
}

export default NavBar
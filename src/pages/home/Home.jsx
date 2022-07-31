import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'


const Home = () => {
  return (
    <div className='homeConteiner'>
      <div className='homeConteiner__title'>
        <h1>Reach all your contacts in one place and build your PROFILE.</h1>
      </div>
      <div className='homeConteiner__start'>
        <Link to='/add-profile' className='btn btn-primary'>get started</Link>
        <input type="text" placeholder='search for network' />
      </div>
    </div>
  )
}

export default Home
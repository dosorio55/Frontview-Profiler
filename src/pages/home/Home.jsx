import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <div>
      <div>
        <h1>Reach all your contacts in one place and build your PROFILE.</h1>
      </div>
      <div>
        <Link to='/add-profile'>get started</Link>
        <input type="text" placeholder='search for network' />
      </div>
    </div>
  )
}

export default Home
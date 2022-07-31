import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'

const ProfileSocials = () => {
    return (

    <div className='header__socials'>
    
        <a href="https://www.linkedin.com/feed/"><BsLinkedin/></a>
        <a href="https://github.com/dosorio55?tab=repositories"><BsGithub/></a>
        <a href="https://twitter.com/"><AiOutlineTwitter/></a>
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

    </div>
  )
}

export default ProfileSocials
import React from 'react'
import './AboutMe.scss'

const AboutMe = ({description}) => {
  return (
    <section>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__content">
          <p>{description}</p>
        </div>
        <p className='btn btn-primary'>CONTACT ME</p>
      </div>

    </section>
  )
}

export default AboutMe
import React from 'react'
import './Experience.scss'
import { FaReact } from 'react-icons/fa'

const Experience = ({ habilities }) => {
    return (
        <section className='skills__container' id='work'>
            <h2>My Expertise</h2>

            <div className="container skills__container">
                <div  className='skills__content'>
                    <div className="skills_cards">
                        {habilities.map((skill) =>

                            <article key={skill} className='skills_card'>
                                <FaReact className='skills_icon' />
                                <h5>{skill}</h5>
                            </article>

                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
import React from 'react'
import { BASE_URL } from '../../../../context/api/context'

const MyWork = ({ project, getProjects, editMode }) => {

    const { projectName, description , imageLink } = project

    const handleDelete = () => {
        fetch(`${BASE_URL}/project/${project._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                getProjects()
            })
    }

    return (
            <article className='portfolio__item'>
               {editMode && <button onClick={handleDelete}>delete</button>}
                <div className='portfolio__item-image'>
                    <img src={imageLink} alt={projectName} />
                </div>
                <h3>{projectName}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/dosorio55" className='btn'>Github</a>
                    <a href="https://tailwindcss.com" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
    )
}

export default MyWork
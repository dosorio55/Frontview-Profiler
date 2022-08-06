import { Card, CardMedia, Typography, CardContent } from '@mui/material'
import React from 'react'
import { BASE_URL } from '../../../../context/api/context'

const MyWork = ({ project, getProjects, editMode }) => {

    const { projectName, description, imageLink } = project

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
        <Card>
            <CardMedia
                component="img"
                width={100}
                // height="194"
                image={imageLink}
                alt={projectName}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <p>{description}</p>
                </Typography>
            </CardContent>
            <h3>{projectName}</h3>
            <a href="https://tailwindcss.com" className='btn btn-primary'>Live Demo</a>
            <a href="https://github.com/dosorio55" className='btn'>Github</a>
            {editMode && <button onClick={handleDelete}>delete</button>}
        </Card>
    )
}

export default MyWork
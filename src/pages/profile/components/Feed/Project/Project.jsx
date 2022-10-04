import { Card, CardMedia, Typography, CardContent, Button, Box, Grid, styled } from '@mui/material'
import React from 'react'
import { BASE_URL } from '../../../../../context/api/context';

const StyledBox = styled(Box)(({
    display: "flex",
    justifyContent: "center",
    // flexDirection: "column",
    padding: "0 1.125rem 1.125rem 1.125rem",
    // backgroundColor: "#e3f2fd",
    gap: 15,
}));

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
                height="115rem"
                image={imageLink}
                alt={projectName}
            />
            <CardContent>
                <Typography component={'span'} variant={'body2'} color="text.secondary">
                    <h3>{projectName}</h3>
                    {/* <p>{description}</p> */}
                </Typography>
            </CardContent>
            <StyledBox>
                <Button size='small' variant="outlined">GitHub</Button>
                <Button size='small' variant="contained">Live Demo</Button>
            </StyledBox>
        </Card>
    )
}

export default MyWork
import { Avatar, Box, CircularProgress, Paper, Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import MyWork from './components/MyWork/MyWork';
import { StyledPaper } from './Styles/materialStyles';

const StyledBox = styled(Box)(({
    padding: "1.5rem",
    backgroundColor: "#e3f2fd"
}));

const ProfileBox = styled(Box)(({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
}));

const Feed = () => {

    const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        fetch(`${BASE_URL}/project/personal`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }).then(res => res.json())
            .then(data => {
                setProjects(data)
                console.log(data)
            })
    };

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/profiles/personal`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setProfile(data[0]);
                console.log(data[0])
            })
            .finally(() => {
                setLoading(false);
            });

        fetch(`${BASE_URL}/project/personal`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }).then(res => res.json())
            .then(data => {
                setProjects(data)
                console.log(data)
            })
    }, [jwtToken]);


    /*   const handleEdit = () => {
        setEditMode(!editMode)
      } */

    const addProjectModal = () => {
        setProjectModal(!projectModal)
    }

    const { name, headline, description, habilities, image } = profile

    return (
        <StyledBox flex={10} style={{ margin: "1.5rem" }} borderRadius>
            {loading ?
                <CircularProgress />
                : <>
                    <Stack direction="row" spacing={2}>
                        <StyledPaper flex={8} elevation={0}>
                            <ProfileBox>
                                <Avatar
                                    alt={name}
                                    src={image}
                                    sx={{ width: 100, height: 100 }}
                                />
                                {/*         <Typography variant="h6" component="p" color="initial">
                                    {name}
                                </Typography> */}
                            </ProfileBox>
                            <Typography variant="body1" component="p" color="initial">
                            <AboutMe description={description} />
                            </Typography>
                        </StyledPaper>

                        <StyledPaper flex={4} elevation={0}>
                            {habilities &&
                                <Experience habilities={habilities}></Experience>}
                        </StyledPaper>
                        <StyledPaper flex={4} elevation={0}>
                            {habilities &&
                                <Experience habilities={habilities}></Experience>}
                        </StyledPaper>
                    </Stack>



                    <StyledPaper>
                        {projects && projects.map((project) =>

                            <MyWork
                                key={project._id}
                                project={project}
                                getProjects={getProjects}
                                editMode={editMode}
                            ></MyWork>
                        )}
                    </StyledPaper>
                </>}

        </StyledBox>
    )
}

export default Feed
{/*{editMode &&
<article className='portfolio__item'>
<p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
</article>
} */}
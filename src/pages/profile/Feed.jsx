import { Avatar, Box, CircularProgress, Grid, Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import { StyledPaper } from './Styles/materialStyles';

const StyledBox = styled(Box)(({
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    backgroundColor: "#e3f2fd",
    gap: 15,
}));

const ProfileBox = styled(Box)(({
    display: "flex",
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: "center"
}));

const GridContainer = styled(Box)(({
    display: "grid",
    gridTemplateColumns: '6fr 3fr 3fr',
    gridTemplateRows: '4fr 8fr',
    gap: 15
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
                :
                <GridContainer>
                    <StyledPaper flex={8} elevation={0}>
                        <ProfileBox>
                            <Avatar
                                alt={name}
                                src={image}
                                sx={{ width: 100, height: 100 }}
                            />
                            <Typography variant="body1" component="p" color="initial">
                                <AboutMe description={description} />
                            </Typography>
                        </ProfileBox>
                    </StyledPaper>

                    <StyledPaper elevation={0}>
                        {habilities &&
                            <Experience habilities={habilities}></Experience>}
                    </StyledPaper>

                    <StyledPaper elevation={0}>
                        {habilities &&
                            <Experience habilities={habilities}></Experience>}
                    </StyledPaper>


                    <StyledPaper flex={16}>
                        <Stack direction="row" spacing={2}>
                            {projects && projects.map(project =>
                                <Project
                                    key={project._id}
                                    project={project}
                                    getProjects={getProjects}
                                    editMode={editMode}
                                ></Project>
                            )}
                        </Stack>
                    </StyledPaper>

                    <StyledPaper elevation={0}>
                        {habilities &&
                            <Experience habilities={habilities}></Experience>}
                    </StyledPaper>


                </GridContainer>
            }

        </StyledBox>
    )
}

export default Feed
{/*{editMode &&
<article className='portfolio__item'>
<p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
</article>
} */}
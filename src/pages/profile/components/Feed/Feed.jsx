import { Avatar, Box, CircularProgress, Divider, Grid, Pagination, Paper, Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../context/api/context';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import WorkTimeline from '../WorkTimeline';
import { StyledPaper } from '../../Styles/materialStyles';
import images from '../../../../constants/images'
import ProfileSocials from '../ProfileSocials/ProfileSocials';

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
    justifyContent: "center",
    minWidth: "90%"
}));

const GridContainer = styled(Box)(({
    display: "grid",
    gridTemplateColumns: '6fr 3fr 3fr',
    gap: 15
}));


const ProjectsGrid = styled(Box)(({
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: "1.125rem",
    paddingBottom: "0.8rem",
    alignItems: "center",
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
            .then(data => setProjects(data))
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
            .then(data => setProfile(data[0]))
            .finally(() => {
                setLoading(false);
            });

        fetch(`${BASE_URL}/project/personal`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }).then(res => res.json())
            .then(data => setProjects(data))
    }, [jwtToken]);


    /*   const handleEdit = () => {
        setEditMode(!editMode)
      } */

    const addProjectModal = () => {
        setProjectModal(!projectModal)
    }

    const { name, headline, description, habilities, image } = profile

    return (
        <StyledBox flex={10} style={{ margin: "1rem" }} borderRadius>
            {/* {loading ?
                <CircularProgress />
                : */}
                <GridContainer>
                    <StyledPaper flex={8} elevation={3}>
                        <Typography variant="subtitle2" component="p" color="initial" sx={{ display: "block" }}>
                            About Me
                        </Typography>
                        <Divider />
                        <ProfileBox sx={{ margin: "auto" }}>
                            <Avatar
                                alt={name}
                                src={image}
                                sx={{ width: 100, height: 100 }}
                            />
                            <Box>
                                <Typography variant="h6" component="p" color="initial">
                                    {name}
                                </Typography>

                                <Typography component={'span'} variant={'body2'} color="initial">
                                    <AboutMe description={description} />
                                </Typography>
                            </Box>
                        </ProfileBox>
                    </StyledPaper>

                    <StyledPaper elevation={3} sx={{ flexDirection: "column" }}>
                        <Typography variant="subtitle2" component="p" color="initial">
                            Skills
                        </Typography>
                        <Divider />
                        <Experience habilities={habilities}></Experience>

                    </StyledPaper>

                    <StyledPaper elevation={3} sx={{ flexDirection: "column" }}>
                        <Typography variant="subtitle2" component="p" color="initial">
                            Contact Me
                        </Typography>
                        <Divider />
                        <ProfileSocials />
                    </StyledPaper>


                    <Paper sx={{ gridColumn: "span 2" }} elevation={3}>

                        <ProjectsGrid container direction="row" spacing={2} sx={{ height: "87%" }}>
                            {projects && projects.map(project =>
                                <Project
                                    key={project._id}
                                    project={project}
                                    getProjects={getProjects}
                                    editMode={editMode}
                                ></Project>
                            )}
                        </ProjectsGrid>
                        <Divider />
                        {/* <Typography variant="subtitle2" component="p" color="initial">
                            Proyects
                        </Typography> */}
                        <Pagination count={3} variant="outlined" color="secondary" size='small'
                            sx={{ display: "flex", justifyContent: "flex-end", p: "0.3rem .3rem .3rem" }} />
                    </Paper>

                    <StyledPaper elevation={3} sx={{ minHeight: "54vh" }}>
                        <Typography variant="subtitle2" component="p" color="initial" sx={{ display: "block" }}>
                            Timeline
                        </Typography>
                        <Divider />
                        <WorkTimeline />
                    </StyledPaper>


                </GridContainer>
            {/* } */}

        </StyledBox>
    )
}

export default Feed
/*{editMode &&
<article className='portfolio__item'>
<p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
</article>
} */
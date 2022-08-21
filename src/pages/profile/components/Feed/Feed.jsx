import { Avatar, Box, CircularProgress, Divider, Grid, Pagination, Paper, Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../context/api/context';
/* import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Project from './components/Project/Project';
import WorkTimeline from '../WorkTimeline';
import { StyledPaper } from '../../Styles/materialStyles';
import images from '../../../../constants/images'
import ProfileSocials from '../ProfileSocials'; */
import PersonalInfo from './components/PersonalInfo';
import EditProfile from './components/EditProfile';

const StyledBox = styled(Box)(({
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    backgroundColor: "#e3f2fd",
    gap: 15,
}));

const Feed = ({editMode}) => {

    //ojo esto no funciona muy bien, lo del token
    const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token;

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const [projects, setProjects] = useState([]);

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

    return (
        <StyledBox flex={10} style={{ margin: "1rem" }} borderRadius>
            {/* <CircularProgress /> */}
            {editMode ?
                <EditProfile />
                : <PersonalInfo profile={profile} projects={projects}
                    setProjects={setProjects} editMode={editMode} />}

        </StyledBox>
    )
}

export default Feed
/*{editMode &&
<article className='portfolio__item'>
<p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
</article>
} */
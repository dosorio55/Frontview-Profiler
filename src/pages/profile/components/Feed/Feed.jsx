import { Avatar, Box, CircularProgress, Divider, Grid, Pagination, Paper, Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../context/api/context';
import PersonalInfo from './PersonalInfo';
import EditProfile from './EditProfile/EditProfile';
import { useContext } from 'react';
import { EditModeContext } from '../../Profile';
import { Outlet } from 'react-router-dom';

const StyledBox = styled(Box)(({
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    backgroundColor: "#e3f2fd",
    gap: 15,
}));

const Feed = () => {

    const editMode = useContext(EditModeContext);
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

            <Outlet profile={profile} projects={projects}
                setProjects={setProjects} editMode={editMode} />
{/*             {editMode.editState ?
                <EditProfile />
                : <PersonalInfo profile={profile} projects={projects}
                    setProjects={setProjects} editMode={editMode} />} */}
        </StyledBox>
    )
}

export default Feed
/*{editMode &&
<article className='portfolio__item'>
<p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
</article>
} */
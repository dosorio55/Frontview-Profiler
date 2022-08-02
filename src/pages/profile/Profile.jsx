import React from 'react'
import './Profile.scss'
import Feed from './Feed';
import SideBar from './SideBar';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

const Profile = () => {

  return (

    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
      </Stack>
    </Box>
  )
}

export default Profile


{/* ===================================================Modal ===================== */ }
{/*       {projectModal &&
  <AddProject

    modalSetter={setProjectModal}
    getProjects={getProjects}
  >
  </AddProject>} */}
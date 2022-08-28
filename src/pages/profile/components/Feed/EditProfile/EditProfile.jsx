import { Avatar, Box, Button, Divider, Paper, styled, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UserProfileContext } from '../../../../../App';

import TabsEditProfile from './TabsEditProfile';
import PersonalInfoEdit from './PersonalInfoEdit';
import SkillsEdit from './SkillsEdit';
import TimelineEdit from './TimelineEdit';
import ProjectsEdit from './ProjectsEdit';

const StyledPaper = styled(Paper)(({
  padding: '.9rem',
  border: "1px solid rgb(152, 209, 255)",
}));

const EditProfile = () => {

  const [editTabs, setEditTabs] = useState('profile');

  return (
    <Box>
      <StyledPaper>
        <Typography variant="h6" component="p" color="initial">
          Edit Profile
        </Typography>
      </StyledPaper>

      {/* ------------------ Tabs -------------------------*/}
      <StyledPaper sx={{ mt: '1.3rem' }}>
        <TabsEditProfile editTabs={editTabs} setEditTabs={setEditTabs} />

        <Divider />

        {/* ------------------------ PERSONAL INFO --------------- */}

        {editTabs === 'profile' && <PersonalInfoEdit />}

        {/* ------------------------ Skills --------------- */}

        {editTabs === 'skills' && <SkillsEdit />}

        {/* ------------------------ Timeline --------------- */}

        {editTabs === 'timeline' && <TimelineEdit />}

        {/* ------------------------ Projects --------------- */}

        {editTabs === 'projects' && <ProjectsEdit />}


      </StyledPaper>
    </Box>
  )
}

export default EditProfile
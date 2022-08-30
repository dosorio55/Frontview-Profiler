import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { IoMdGitNetwork } from 'react-icons/io';
import { BsStopCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { EditModeContext } from './Profile';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled(Box)(({ theme }) => ({
  padding: theme.spacing(.8, 1)
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  padding: theme.spacing(.8, 1)
}));

const SideBar = () => {

  const [profileTabs, setProfileTabs] = useState('edit profile')

  const navigate = useNavigate();
  const editMode = useContext(EditModeContext);

  const { editState, handleEditMode } = editMode;

  const handleEditButton = () => {
    navigate(!editState ? 'edit-info' : 'personal-info')
    handleEditMode()
  }

  const handleChange = (event, newValue) => setProfileTabs(newValue);

  return (
    <Box flex={1.5} sx={{ paddingLeft: "1rem" }} pt="1rem">

      <Tabs
        value={profileTabs}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        orientation='vertical'

        sx={{
          display: 'flex', justifyContent: 'flex-start',
          '& button': { transition: 'all 0.4s', borderTopLeftRadius: 15, borderBottomLeftRadius: 15 },
          '& button:hover': { backgroundColor: 'secondary.lighter', color: 'secondary.main' },
          '& button:focus': { backgroundColor: 'secondary.lighter', color: 'secondary.main' }

        }}
      >
        <StyledDiv >
          <Typography variant="h6" component="p">Profile</Typography>
        </StyledDiv>
        <Tab value="edit" label={!editState ? 'edit' : 'stop editing'} onClick={handleEditButton}
          iconPosition='start'
          icon={!editState ? <BiEdit style={{ width: "25px", height: "25px" }} />
            : <BsStopCircle style={{ width: "25px", height: "25px", color: "red" }} />} />


        <StyledDiv >
          <Typography variant="h6" component="p">Dashboard</Typography>
        </StyledDiv>
        <Tab value="network" label="network" onClick={() => navigate('network')}
          iconPosition='start' icon={<IoMdGitNetwork style={{ width: "25px", height: "25px" }} />} />
      </Tabs>

      {/* <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListIcon>
              <ImHome3 style={{ width: "18px", height: "18px" }} />
            </StyledListIcon>
            <ListItemText primary="Home" />
          </StyledListItemButton>
        </ListItem> 
        <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListIcon>
              <DraftsIcon style={{ width: "18px", height: "18px" }} />
            </StyledListIcon>
            <ListItemText primary="My Network" />
          </StyledListItemButton>
        </ListItem>
        <Divider />
        <StyledDiv >
          <Typography variant="h6" component="p">Profile</Typography>
        </StyledDiv>
        <ListItem disablePadding onClick={handleEditMode}>
          <StyledListItemButton>
            <StyledListIcon>
              {editState ? <BsStopCircle style={{ width: "18px", height: "18px", color: "red" }} />
                : <CgProfile style={{ width: "18px", height: "18px" }} />}
            </StyledListIcon>
            <ListItemText primary={editState ? 'Stop Editing' : 'Edit'} />
          </StyledListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListIcon>
              <BiLogOut style={{ width: "18px", height: "18px" }} />
            </StyledListIcon>
            <ListItemText primary="Logout" />
          </StyledListItemButton>
        </ListItem>*/}
    </Box>
  )
}

export default SideBar
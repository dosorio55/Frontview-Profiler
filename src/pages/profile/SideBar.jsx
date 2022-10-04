import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BiEdit, BiLogOut, BiNetworkChart } from 'react-icons/bi';
import { IoMdGitNetwork } from 'react-icons/io';
import { HiOutlinePencil } from 'react-icons/hi';

import { ImHome3 } from 'react-icons/im';
import { BsStopCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { EditModeContext } from './Profile';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { logout, useAuthDispatch } from '../../context/auth';

const StyledDiv = styled(Box)(({ theme }) => ({
  padding: theme.spacing(.8, 1)
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  padding: theme.spacing(.8, 1)
}));

const SideBar = () => {

  // const [profileTabs, setProfileTabs] = useState('edit')

  const navigate = useNavigate();
  const editMode = useContext(EditModeContext);
  const dispatch = useAuthDispatch();

  const { editState, handleEditMode, setEditMode } = editMode;

  const handleEditButton = () => {
    navigate(!editState ? 'edit-info' : 'personal-info')
    handleEditMode()
  };

  const stopEdit = () => {
    setEditMode(false)
  }

  const handleLogout = () => {
    logout(dispatch);
    navigate("/");
    // setLogin();
  };

  // const handleChange = (event, newValue) => setProfileTabs(newValue);

  return (
    <Box flex={1} sx={{ paddingLeft: "1rem" }} pt="1rem">

      {/*   <Tabs
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
          icon={!editState ? <BiEdit style={{ width: "25px", height: "25px" }}
          />
            : <BsStopCircle style={{ width: "25px", height: "25px", color: "red" }} />} />


        <StyledDiv >
          <Typography variant="h6" component="p">Dashboard</Typography>
        </StyledDiv>
        <Tab value="network" label="network" onClick={() => navigate('network')}
          iconPosition='start' icon={<IoMdGitNetwork style={{ width: "25px", height: "25px" }} />} />
      </Tabs> */}

      <ListItem disablePadding onClick={() => navigate('/')}>
        <ListItemButton>
          <ListItemIcon>
            <ImHome3 style={{ width: "18px", height: "18px" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={() => {
        stopEdit(false)
        navigate('network')
      }}>
        <ListItemButton>
          <ListItemIcon>
            <BiNetworkChart style={{ width: "18px", height: "18px" }} />
          </ListItemIcon>
          <ListItemText primary="Network" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <StyledDiv >
        <Typography variant="h6" component="p">Profile</Typography>
      </StyledDiv>
      <ListItem disablePadding onClick={() => {
        stopEdit()
        navigate('personal-info')
      }}>
        <ListItemButton>
          <ListItemIcon>
            <CgProfile style={{ width: "18px", height: "18px" }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={handleEditButton} >
        <ListItemButton>
          <ListItemIcon>
            {editState ? <BsStopCircle style={{ width: "18px", height: "18px", color: "red" }} />
              : <HiOutlinePencil style={{ width: "18px", height: "18px" }} />}
          </ListItemIcon>
          <ListItemText primary={editState ? 'Stop Editing' : 'Edit'} />
        </ListItemButton>
      </ListItem>
      {/* <Divider />
      <ListItem onClick={handleLogout} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BiLogOut style={{ width: "18px", height: "18px" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem> */}
    </Box>
  )
}

export default SideBar
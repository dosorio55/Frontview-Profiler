import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import { ImHome3 } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi';
import { BsStopCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { EditModeContext } from './Profile';

const StyledDiv = styled(Box)(({ theme }) => ({
  padding: theme.spacing(.8, 1)
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(.8, 2)
}));

const StyledListIcon = styled(ListItemIcon)(({
  minWidth: "36px"
}));

const SideBar = () => {

  const editMode = useContext(EditModeContext);

  const { editState, handleEditMode } = editMode;

  return (
    <Box flex={1.5} sx={{ paddingLeft: "1rem" }} pt="1rem">
      <List>
        <StyledDiv >
          <Typography variant="h6" component="p">Dashboard</Typography>
        </StyledDiv>
        <ListItem disablePadding>
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
        </ListItem>
      </List>
    </Box>
  )
}

export default SideBar
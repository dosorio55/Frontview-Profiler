import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import { ImHome3 } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi';

const StyledDiv = styled(Box)(({ theme }) => ({
  padding: theme.spacing(.8, 1)
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(.8, 2)
}));

const StyledListIcon = styled(ListItemIcon)( ({
  minWidth: "36px"
}));



const SideBar = () => {
  return (
    <Box flex={1} sx={{paddingLeft: "1rem"}}>
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
        <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListIcon>
              <CgProfile style={{ width: "18px", height: "18px" }} />
            </StyledListIcon>
            <ListItemText primary="Edit" />
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
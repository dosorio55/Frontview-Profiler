import { Avatar, Box, Divider, Pagination, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import { ProjectsGrid, StyledPaper } from '../../Styles/materialStyles';
import AboutMe from './AboutMe';
import Experience from './Experience';
import ProfileSocials from './ProfileSocials';
import WorkTimeline from './WorkTimeline';
import Project from './Project/Project';
import { useContext } from 'react';
import { UserProfileContext } from '../../../../App';
import { useGetState } from '../../../../context/auth';

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

//ojo esto no funciona muy bien, lo del token

const PersonalInfo = ({ editMode }) => {

  //CONTEXT user and proyects
  const { name, image, description, habilities, headline } = useContext(UserProfileContext).user;
  const projects = useContext(UserProfileContext).projects;

  const userLoggedState = useGetState();

  /*   const getProjects = () => {
      fetch(`${BASE_URL}/project/personal`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userLoggedState.token}`
        }
      }).then(res => res.json())
        .then(data => setProjects(data))
    }; */

  return (
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
          <p></p>
          <Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <Typography variant="h6" component="p" color="initial">
                {name}
              </Typography>
              <Typography variant="body1" component="p" color="initial">
                {headline}
              </Typography>
            </Box>

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
          {projects.map(project =>
            <Project
              key={project._id}
              project={project}
              // getProjects={getProjects}
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
  )
}

export default PersonalInfo
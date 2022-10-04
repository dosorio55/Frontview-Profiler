import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserProfileContext } from '../../../../../App';
import images from '../../../../../constants/images'
import { BASE_URL } from '../../../../../context/api/context';
import { ContainerBox, ElementsContainer, TextInputStyled } from './editProfileStyles';
import SkillInput from './UI/SkillInput';

const formInitialState = {
  projectName: '',
  github: '',
  imageLink: '',
  livedemo: ''
}

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const SkillsEdit = () => {
  const { habilities } = useContext(UserProfileContext).user;
  const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token;
  const fetchProfile = useContext(UserProfileContext).fetchProfile;

  const [skillsList, setSkillsList] = useState([]);
  const [skillState, setSkillState] = useState();
  const [projectForm, setProjectForm] = useState(formInitialState);

  useEffect(() => {
    setSkillsList(habilities)
  }, [])

  const handleAddSkill = (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}/profiles/add-skill`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify({ newSkills: skillState })
    }).then(() => fetchProfile())
    setSkillsList((prevState) => [...prevState, skillState.toLowerCase()]);
  };

  const handleProjectForm = (event) => {
    console.log(event.target.value)
    setProjectForm((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    console.log(projectForm)
  }

  const submitProject = (event) => {
    event.preventDefault()
    fetch(`${BASE_URL}/project`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(projectForm)
    }).then(() => fetchProfile())
    console.log(projectForm);
  }

  return (
    <Box sx={{
      display: "flex",
      padding: '20px',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      <ContainerBox flex={2}>

        <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
          <Typography variant="subtitle2" component="p" color="initial">
            Skills
          </Typography>
        </ElementsContainer>
        <ElementsContainer sx={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem' }}>
          <Box onSubmit={handleAddSkill} sx={{ display: 'grid', gridTemplateColumns: '5fr 2fr', gap: '1rem' }}>
            <SkillInput handleAddSkill={handleAddSkill} setSkillState={setSkillState} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: '.5rem', flexWrap: 'wrap' }}>
            {skillsList.map(skill =>
              <Box key={skill} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: .5 }}>
                <Box sx={{ display: 'flex', height: 90, width: 90, backgroundColor: 'grey.100', borderRadius: '50%' }}>
                  <img src={images[skill]} alt={skill} style={{ height: "50%", margin: 'auto' }} />
                </Box>
                <Typography variant="span" color="body2">
                  {capitalize(skill)}
                </Typography>
              </Box>
            )}
          </Box>
        </ElementsContainer>
      </ContainerBox>

      {/* ---------------------- Experience ----------------------- */}

      <ContainerBox flex={3}>
        <form onSubmit={submitProject}>
          <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
            <Typography variant="subtitle2" component="p" color="initial">
              Add New Project
            </Typography>
          </ElementsContainer>
          <ElementsContainer sx={{ gap: '1rem' }}>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <TextInputStyled
                id="outlined-multiline-flexible"
                label="Name"
                color='secondary'
                name='projectName'
                fullWidth
                maxRows={4}
                value={projectForm.projectName}
                onChange={handleProjectForm}
              />
              <TextInputStyled
                id="outlined-multiline-flexible"
                label="Image"
                color='secondary'
                name='imageLink'
                fullWidth
                maxRows={4}
                value={projectForm.imageLink}
                onChange={handleProjectForm}
              />
            </Box>
            <TextInputStyled
              id="outlined-multiline-flexible"
              label=" GitHub"
              name='github'
              color='secondary'
              fullWidth
              maxRows={4}
              value={projectForm.github}
              onChange={handleProjectForm}

            />
            <TextInputStyled
              id="outlined-multiline-flexible"
              label="Live Demo"
              color='secondary'
              name='livedemo'
              multiline
              // fullWidth
              maxRows={4}
              value={projectForm.livedemo}
              onChange={handleProjectForm}
            />
          <Button fullWidth type='submit' variant='contained' color='secondary'>Add Project</Button>
          </ElementsContainer>

        </form>
      </ContainerBox>

    </Box>
  )
}

export default SkillsEdit
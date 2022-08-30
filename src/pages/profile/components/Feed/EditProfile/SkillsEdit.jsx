import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react';
import { UserProfileContext } from '../../../../../App';
import images from '../../../../../constants/images'
import { ContainerBox, ElementsContainer, SocialsContainer, StyledGrid, TextInputStyled } from './editProfileStyles';

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const IconBox = styled(Box)(({
  height: 40,
}));

const StyledBox = styled(Box)(({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 5
}));

const BoxContainer = styled(Box)(({
  display: "flex",
  flexWrap: "wrap",
  marginTop: 10,
  justifyContent: 'space-evenly',
  alignItems: "center",
  minHeight: "5rem"
}));

const SkillsEdit = () => {

  const { habilities } = useContext(UserProfileContext).user;

  return (
    <Box sx={{
      display: "flex",
      padding: '20px',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      <ContainerBox flex={1}>

        <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
          <Typography variant="subtitle2" component="p" color="initial">
            Skills
          </Typography>
        </ElementsContainer>
        <ElementsContainer sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '.7rem' }}>
          <TextInputStyled
            id="outlined-multiline-flexible"
            label="Add New Skill"
            multiline
            fullWidth
            color="secondary"
            maxRows={4}
          // value=''
          // onChange={handleChange}
          />
          {habilities.map(skill =>
            <div key={skill}>
              <Box sx={{ height: 40 }}>
                <img src={images[skill]} alt={skill} style={{ height: "100%" }} />
              </Box>
              <Typography variant="span" color="body2">
                {capitalize(skill)}
              </Typography>
            </div>
          )}
        </ElementsContainer>
      </ContainerBox>

      {/* ---------------------- ABOUT ME EDIT ----------------------- */}

      <ContainerBox flex={1}>
        <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
          <Typography variant="subtitle2" component="p" color="initial">
            Experience
          </Typography>
        </ElementsContainer>
        <ElementsContainer sx={{ gap: '1rem' }}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>

            <TextInputStyled
              id="outlined-multiline-flexible"
              label="Position"
              color='secondary'
              multiline
              fullWidth
              maxRows={4}
            // value=''
            // onChange={handleChange}
            />
            <TextInputStyled
              id="outlined-multiline-flexible"
              label="Year"
              color='secondary'
              multiline
              fullWidth
              maxRows={4}
            // value=''
            // onChange={handleChange}
            />
          </Box>
            <TextInputStyled
              id="outlined-multiline-flexible"
              label="Company"
              color='secondary'
              multiline
              fullWidth
              maxRows={4}
            // value=''
            // onChange={handleChange}
            />
        </ElementsContainer>
      </ContainerBox>
      {/* ----------------------------------SOCIAL MEDIA--------------------- */}
      {/*   <ContainerBox>
        <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
          <Typography variant="subtitle2" component="p" color="initial">
            Social Media
          </Typography>
        </ElementsContainer>
        <ElementsContainer sx={{ gap: '1rem' }}>
          <SocialsContainer>
            <TextInputStyled
              id="outlined-multiline-flexible"
              label="Facebook Profile Url"
              fullWidth
              color="secondary"
              maxRows={4}
              value=''
              sx={{ backgroundColor: 'palette.grey[50]', borderRadius: '5px' }}
            />
          </SocialsContainer>
          <SocialsContainer>

            <TextInputStyled
              id="outlined-multiline-flexible"
              label="GitHub Profile Url"
              color='secondary'
              multiline
              fullWidth
              maxRows={4}
            />
          </SocialsContainer>
          <SocialsContainer>

            <TextInputStyled
              id="outlined-multiline-flexible"
              label="LinkedIn Profile Url"
              color='secondary'
              multiline
              fullWidth
              maxRows={4}
            />
          </SocialsContainer>

        </ElementsContainer>
      </ContainerBox> */}
    </Box>
  )
}

export default SkillsEdit
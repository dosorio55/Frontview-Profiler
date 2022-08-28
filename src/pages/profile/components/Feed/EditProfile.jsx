import { Avatar, Box, Button, Divider, Paper, styled, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { UserProfileContext } from '../../../../App';
import { BsFacebook, BsFillFileEarmarkPersonFill, BsGithub } from 'react-icons/bs';
import { GiBrain, GiSpellBook } from 'react-icons/gi';
import { FiPenTool } from 'react-icons/fi';
import MultipleSelectChip from './test';
import { AiFillLinkedin } from 'react-icons/ai';

const StyledGrid = styled(Box)(({
  display: "grid",
  gridTemplateColumns: '4fr 7fr',
  padding: 20,
  gap: '1rem',
  flexWrap: 'wrap'
}));

const StyledUl = styled('ul')(({
  display: "flex",
  padding: 20
}));

const StyledLi = styled('li')(({
  display: "flex",
  gap: 8,
  alignItems: 'center',
  padding: '0 .7rem',
  cursor: 'pointer'
}));

const StyledPaper = styled(Paper)(({
  padding: '.9rem',
  border: "1px solid rgb(152, 209, 255)",
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  gap: 15,
  borderRadius: theme.shape.borderRadius,
  transition: { duration: theme.transitions.duration.standard },
  // justifyContent: "center",
  border: '1px solid rgb(227, 242, 253)',
  '&:hover': {
    boxShadow: 'rgba(32, 40, 45, 0.08) 0px 2px 14px 0px'
  }
}));

const ElementsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '.7rem 1rem',
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottom: '1px solid rgb(227, 242, 253)'

}));

const TextInputStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50]
}));

const SocialsContainer = styled(Box)(({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
}));


const EditProfile = () => {

  const { name, image, description, habilities, headline } = useContext(UserProfileContext).user;

  return (
    <Box>
      <StyledPaper>
        <Typography variant="h6" component="p" color="initial">
          Edit Profile
        </Typography>
      </StyledPaper>

      {/* ------------------ Tabs -------------------------*/}
      <StyledPaper sx={{ mt: '1.3rem' }}>
       {/* <StyledUl>
          <StyledLi>
            <BsFillFileEarmarkPersonFill style={{ width: "18px", height: "18px" }} />
            About Me
          </StyledLi>
          <StyledLi>
            <GiBrain style={{ width: "18px", height: "18px" }} />
            Skills
          </StyledLi>
          <StyledLi>
            <BsFillFileEarmarkPersonFill style={{ width: "18px", height: "18px" }} />
            Timeline
          </StyledLi>
          <StyledLi>
            <FiPenTool style={{ width: "18px", height: "18px" }} />
            Projects
          </StyledLi>
        </StyledUl> */}
        
        <Divider />

        {/* ------------------------AVATAR AND UPDATE PICTURE --------------- */}

        <StyledGrid >

          <ContainerBox >
            <ElementsContainer>
              <Typography variant="subtitle2" component="p" color="initial">
                Personal Information
              </Typography>
            </ElementsContainer>
            <ElementsContainer sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '.7rem' }}>
              <Box flex={1}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    alt={name}
                    src={image}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="subtitle2" component="p" color="initial" sx={{ p: '.5rem' }}>
                    {name}
                  </Typography>
                  <Button variant='contained' color='secondary'>Update Picture</Button>
                </Box>
              </Box>
              <Box flex={1} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextInputStyled
                  id="outlined"
                  label="Name"
                  color='secondary'
                  fullWidth
                  value={name}
                // onChange={handleChange}
                />
                <TextInputStyled
                  id="outlined"
                  label="Surname"
                  color='secondary'
                  fullWidth
                  value={name}
                // onChange={handleChange}
                />
                <TextInputStyled
                  id="outlined"
                  label="Headline"
                  color='secondary'
                  fullWidth
                  value={headline}
                // onChange={handleChange}
                />
              </Box>

            </ElementsContainer>
          </ContainerBox>

          {/* ---------------------- ABOUT ME EDIT ----------------------- */}

          <ContainerBox>
            <ElementsContainer>
              <Typography variant="subtitle2" component="p" color="initial">
                About Me
              </Typography>
            </ElementsContainer>
            <ElementsContainer sx={{ gap: '1rem' }}>
              <TextInputStyled
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                fullWidth
                color="secondary"
                maxRows={4}
                value={description}
              // onChange={handleChange}
              />
              <TextInputStyled
                id="outlined-multiline-flexible"
                label="Multiline"
                color='secondary'
                multiline
                fullWidth
                maxRows={4}
                value={description}
              // onChange={handleChange}
              />
            </ElementsContainer>
          </ContainerBox>
          {/* ----------------------------------SOCIAL MEDIA--------------------- */}
          <ContainerBox>
            <ElementsContainer>
              <Typography variant="subtitle2" component="p" color="initial">
                Social Media
              </Typography>
            </ElementsContainer>
            <ElementsContainer sx={{ gap: '1rem' }}>
              <SocialsContainer>
                <BsFacebook style={{ padding: '.1rem', width: "25px", height: "25px", color: "#4267b2" }} />
                <TextInputStyled
                  id="outlined-multiline-flexible"
                  label="Facebook Profile Url"
                  fullWidth
                  color="secondary"
                  maxRows={4}
                  value=''
                  sx={{ backgroundColor: 'palette.grey[50]', borderRadius: '5px' }}
                // onChange={handleChange}
                />
              </SocialsContainer>
              <SocialsContainer>
                <BsGithub style={{ padding: '.1rem', width: "25px", height: "25px" }} />

                <TextInputStyled
                  id="outlined-multiline-flexible"
                  label="GitHub Profile Url"
                  color='secondary'
                  multiline
                  fullWidth
                  maxRows={4}
                // value={description}
                // onChange={handleChange}
                />
              </SocialsContainer>
              <SocialsContainer>
                <AiFillLinkedin style={{ padding: '.1rem', width: "25px", height: "25px", color: "#0e76a8" }} />

                <TextInputStyled
                  id="outlined-multiline-flexible"
                  label="LinkedIn Profile Url"
                  color='secondary'
                  multiline
                  fullWidth
                  maxRows={4}
                // value={description}
                // onChange={handleChange}
                />
              </SocialsContainer>

            </ElementsContainer>
          </ContainerBox>
        </StyledGrid>
      </StyledPaper>
    </Box>
  )
}

export default EditProfile
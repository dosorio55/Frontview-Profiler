import { Avatar, Box, Button, Divider, Paper, styled, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { UserProfileContext } from '../../../../App';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { GiBrain, GiSpellBook } from 'react-icons/gi';
import { FiPenTool } from 'react-icons/fi';
import MultipleSelectChip from './test';

const StyledBox = styled(Box)(({
  display: "flex",
  padding: 20
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

const ProfileBox = styled(Box)(({
  display: "flex",
  flexDirection: 'row',
  gap: 15,
  alignItems: 'center',
  justifyContent: "center",
}));

const EditProfile = () => {

  const { name, image, description, habilities } = useContext(UserProfileContext).user;

  return (
    <Box>
      <StyledPaper>
        <Typography variant="h6" component="p" color="initial">
          Edit Profile
        </Typography>
      </StyledPaper>
      {/* ------------------ Tabs -------------------------*/}
      <StyledPaper sx={{ mt: '1.3rem' }}>
        <StyledUl>
          <StyledLi>
            <BsFillFileEarmarkPersonFill style={{ width: "18px", height: "18px" }} />
            About Me
          </StyledLi>
          <StyledLi>
            {/* <GiBrainFreeze style={{ width: "18px", height: "18px" }}/> */}
            <GiBrain style={{ width: "18px", height: "18px" }} />
            Skills
          </StyledLi>
          <StyledLi>
            <BsFillFileEarmarkPersonFill style={{ width: "18px", height: "18px" }} />
            Timeline
          </StyledLi>
          <StyledLi>
            {/* <GiSpellBook style={{ width: "18px", height: "18px" }}/> */}
            {/* <TbTools style={{ width: "18px", height: "18px" }}/> */}
            <FiPenTool style={{ width: "18px", height: "18px" }} />
            Projects
          </StyledLi>
        </StyledUl>
        <Divider />
        <StyledBox>
          <ProfileBox flex={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <Avatar
                  alt={name}
                  src={image}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="subtitle2" component="p" color="initial">
                  {name}
                </Typography>
              </Box>
              <Button variant='contained' color='secondary'>Update Picture</Button>

            </Box>
          </ProfileBox>
          <Box flex={8}>
            <Typography variant="h6" component="p" color="initial">
              Description
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              fullWidth
              color="secondary"
              focused
              // maxRows={4}
              value={description}
            // onChange={handleChange}
            />
            <Typography variant="h6" component="p" color="initial">
              Description
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              variant="filled"
              color='secondary'
              multiline
              fullWidth
              // maxRows={4}
              value={description}
            // onChange={handleChange}
            />

            <MultipleSelectChip/>
          </Box>
        </StyledBox>
      </StyledPaper>
    </Box>
  )
}

export default EditProfile
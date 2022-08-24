import { Avatar, Box, styled, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { UserProfileContext } from '../../../../App';

const StyledBox = styled(Box)(({
  display: "flex",
  padding: 20
}));

const EditProfile = () => {

  const { name, image, description, habilities } = useContext(UserProfileContext).user;

  return (
    <StyledBox>
      <Box flex={4}>
        <Avatar
          alt={name}
          // src={profile.image}
          src={image}
          sx={{ width: 100, height: 100 }}
        />
        <p>{name}</p>
      </Box>
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
      </Box>
    </StyledBox>
  )
}

export default EditProfile
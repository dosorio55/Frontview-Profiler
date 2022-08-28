import React from 'react'
import images from '../../../../constants/images'
import { Box, styled, Typography } from '@mui/material';

const IconBox = styled(Box)(({
  height: 30,
}));

const BoxContainer = styled(Box)(({
  display: "flex",
  alignItems: "center",
  gap: 10,

}));

const ProfileSocials = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, py: 2, minHeight: "80%", margin: "auto" }}>
      <BoxContainer>
        <IconBox>
          <img src={images.github} alt="" style={{ height: "100%" }} />
        </IconBox>
        <Typography variant="span" color="body2">
          dosorio55
        </Typography>
      </BoxContainer>
      <BoxContainer>
        <IconBox>
          <img src={images.twitter} alt="" style={{ height: "100%" }} />
        </IconBox>
        <Typography variant="span" color="body2">
          dosorio55
        </Typography>
      </BoxContainer>
      <BoxContainer>
        <IconBox>
          <img src={images.linkedin} alt="" style={{ height: "100%" }} />
        </IconBox>
        <Typography variant="span" color="body2">
          diego-osorio-ruiz
        </Typography>
      </BoxContainer>
      <BoxContainer>
        <IconBox>
          <img src={images.phone} alt="" style={{ height: "80%" }} />
        </IconBox>
        <Typography variant="span" color="body2">
          55-5555-55
        </Typography>
      </BoxContainer>
    </Box>
  )
}

export default ProfileSocials
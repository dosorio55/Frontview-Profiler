import { Avatar, Box, Button, duration, Pagination, styled, Typography } from '@mui/material'
import React from 'react'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import './NetworkItem.scss'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fafafa",
  flex: "1",
  borderRadius: theme.shape.borderRadius,
  // minWidth: "25%",
  padding: "1.5rem",
  transition: { duration: theme.transitions.duration.standard },
  border: "1px solid rgb(218, 218, 218)",
  '&:hover': {
    border: "1px solid rgb(33, 150, 243)"

  }

}));

const StyledButton = styled(Button)(({
  // backgroundColor: "#e3f2fd",
  padding: ".8rem",
}));

const NetworkItem = ({ networkItem }) => {

  const { name, image, headline, _id } = networkItem

  /* <Link to={`${_id}`} > */
  /* </Link> */
  return (
    <StyledBox>
      <Box sx={{ display: "flex", alignItems: "center", pt: ".5rem", flexDirection: "column"}}>
        <Avatar
          alt={name}
          src={image}
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', pt: '1rem'}}>
          <Typography variant="h6" component="p" color="initial">
            {name}
          </Typography>
          <Typography variant="subtitle2" component="p" color="GrayText">
            {headline}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "1rem", pt: "1rem" }}>
        <StyledButton variant="contained" size="large" sx={{ flex: "1" }}>
          <BsFacebook />
        </StyledButton>
        <StyledButton variant="contained" size="large" sx={{ flex: "1" }}>
          <BsLinkedin />
        </StyledButton>
        <StyledButton variant="contained" size="large" sx={{ flex: "1" }}>
          <CgProfile />
        </StyledButton>
      </Box>

    </StyledBox>
  )
}

export default NetworkItem
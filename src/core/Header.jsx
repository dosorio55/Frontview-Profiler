import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext, UserProfileContext } from '../App';
import { logout, useAuthDispatch } from '../context/auth';
import { BiLogOut, BiUser } from 'react-icons/bi'
import images from '../constants/images'
import { AppBar, Avatar, Badge, Box, Button, Divider, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: 'center',
  width: 'calc(100% - 74px)',
  justifyContent: 'space-between',
  maxWidth: '1200px',
});

//Icons

const Icons = styled(Box)(({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const LogoBox = styled(Box)(({
  height: 30
}));

const Header = ({ loginValue, setLogin }) => {

  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const { image } = useContext(UserProfileContext).user

  const navigate = useNavigate();

  const handleModal = useContext(ModalContext);
  const dispatch = useAuthDispatch();

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false)
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget)
    setOpen(true)
  };


  const handleLogout = () => {
    logout(dispatch)
    navigate("/")
    setLogin()
  };

  return (
    <AppBar position='static' elevation={0} sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'common.white', borderBottom: "1px solid rgb(218, 218, 218)" }}>
      {/* <Container maxWidth="xl"> */}
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center0', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
          <LogoBox sx={{ pr: ".5rem" }}>
            <img src={images.logo} alt="logo" style={{ height: "100%" }} />
          </LogoBox>
          <Typography variant="h6" component="h1" color="initial" sx={{ fontWeight: 'bold', mt: "4px" }}>
            WINDVIEW
          </Typography>
        </Box>

        <Icons>
          {/* {loginValue && <Link to='/add-profile'>add profile</Link>} */}
          <Link to='/'>
            Home
          </Link>
          <Link to='/'>
            Register
          </Link>
          {loginValue && <Link to='/network'>Network</Link>}
          {/*             <Badge badgeContent={4} color="error">
              <BsMailbox style={{ width: "20px", height: "20px" }} color="action" />
            </Badge> */}
          {loginValue ?
            <Avatar onClick={handleClick} sx={{ width: 30, height: 30, cursor: 'pointer' }}
              src={image} alt="Remy Sharp" />
            : <Button variant='contained' onClick={handleModal}>Sign Up</Button>}
          <Menu anchorEl={anchorElm} open={open} onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Link to='/profile'>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              {loginValue ? <BiLogOut style={{ width: "20px", height: "20px" }} onClick={handleLogout} /> : <BiUser style={{ width: "20px", height: "20px" }} />}
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
      {/* </Container> */}
    </AppBar >
  )
}

export default Header
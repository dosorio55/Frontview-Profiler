import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ModalContext, UserProfileContext } from '../App';
import { logout, useAuthDispatch } from '../context/auth';
import { BiLogOut, BiUser } from 'react-icons/bi'
import images from '../constants/images'
import { AppBar, Avatar, Box, Button, Divider, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';

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
  gap: "0rem",
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
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };


  const handleLogout = () => {
    logout(dispatch);
    navigate("/");
    setLogin();
  };

  return (
    <AppBar position='static' elevation={0} sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'common.white', borderBottom: "1px solid rgb(218, 218, 218)" }}>
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center0', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
          <LogoBox sx={{ pr: ".5rem" }}>
            <img src={images.logo} alt="logo" style={{ height: "100%" }} />
          </LogoBox>
          <Typography variant="h6" component="h1" color="initial" sx={{ fontWeight: 'bold', mt: "4px", display: { xs: "none", sm: "block" } }}>
            WINDVIEW
          </Typography>
        
          <Typography variant="h6" component="h1" color="initial" sx={{ fontWeight: 'bold', mt: "4px" }}>

          </Typography>
        </Box>

        <Icons>
          <NavLink className='homeLink' to='/' >
            Home
          </NavLink>
          {/* <NavLink className='homeLink' to='/register'>
            Register
          </NavLink> */}
          {loginValue ?
            <Avatar onClick={handleClick} sx={{ width: 30, height: 30, cursor: 'pointer' }}
              src={image} alt="Remy Sharp" />
            : <Button variant='contained' onClick={handleModal}>Sign Up</Button>}
          <Menu anchorEl={anchorElm} open={open} onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Link to='/profile/personal-info'>
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
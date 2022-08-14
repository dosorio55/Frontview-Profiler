import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext } from '../../App';
import { logout, useAuthDispatch } from '../../context/auth';
import { BiLogOut, BiSearchAlt, BiUser } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import './Header.scss';
import images from '../../constants/images'
import { AppBar, Avatar, Badge, Box, Container, Divider, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
  // maxWidth: '1200px',
  // margin: '0 auto'
});

//Icons

const Icons = styled(Box)(({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const LogoBox = styled(Box)(({
  height: 30,
}));

const Header = ({ loginValue, setLogin }) => {

  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false)
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget)
    setOpen(true)
  }

  const navigate = useNavigate()

  const handleModal = useContext(ModalContext);
  const dispatch = useAuthDispatch()

  const handleLogout = () => {
    logout(dispatch)
    navigate("/")
    setLogin()
  }

  return (
    <>
      <AppBar position='static' elevation={0} sx={{ backgroundColor: 'common.white', borderBottom: "1px solid rgb(218, 218, 218)" }}>
        {/* <Container maxWidth="xl"> */}
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LogoBox sx={{ pr: ".5rem" }}>
              <img src={images.logo} alt="logo" style={{ height: "100%" }} />
            </LogoBox>
            <Typography variant="h6" component="h1" color="initial" sx={{fontWeight: 'bold', mt: "4px"}}>
              WINDVIEW
            </Typography>
          </Box>


          <Icons>
            <Link to='/'>
              {/* <AiFillHome /> */}
              Home
            </Link>
            {/* {loginValue && <Link to='/add-profile'>add profile</Link>} */}
            <Link to='/network'>network</Link>
            <Badge badgeContent={4} color="error">
              <BsMailbox style={{ width: "20px", height: "20px" }} color="action" />
            </Badge>
            <Avatar onClick={handleClick} sx={{ width: 30, height: 30, cursor: 'pointer' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Menu anchorEl={anchorElm} open={open} onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }} >
              <Link to='/profile'>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Balance</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                {loginValue ? <BiLogOut style={{ width: "20px", height: "20px" }} onClick={handleLogout} /> : <BiUser style={{ width: "20px", height: "20px" }} onClick={handleModal} />}
              </MenuItem>
            </Menu>
          </Icons>
        </StyledToolbar>
        {/* </Container> */}
      </AppBar >
    </>
  )
}

export default Header
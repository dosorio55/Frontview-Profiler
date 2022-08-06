import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext } from '../../App';
import { logout, useAuthDispatch } from '../../context/auth';
import { BiLogOut, BiSearchAlt, BiUser } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import './Header.scss';
import { alpha, AppBar, Avatar, Badge, Box, Button, Container, Divider, InputBase, Menu, MenuItem, styled, Toolbar } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around"
});

//Search Input
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '7rem',
      '&:focus': {
        width: '25rem',
      },
    },
  },
}));

//Icons

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}))


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

  const modal = useContext(ModalContext);
  const dispatch = useAuthDispatch()

  const handleLogout = () => {
    logout(dispatch)
    navigate("/")
    setLogin()
  }

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth="xl">
          <StyledToolbar>
            <Icons>
              <Link to='/'><AiFillHome />  Home</Link>
              {/* {loginValue && <Link to='/add-profile'>add profile</Link>} */}
              <Link to='/network'>network</Link>
            </Icons>
            <Search>
              <SearchIconWrapper>
                <BiSearchAlt />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Icons id='demo-positioned-menu'>
              <Badge badgeContent={4} color="error">
                <BsMailbox style={{ width: "20px", height: "20px" }} color="action" />
              </Badge>
              {loginValue ? <BiLogOut style={{ width: "20px", height: "20px" }} onClick={handleLogout} /> : <BiUser style={{ width: "20px", height: "20px" }} onClick={modal} />}
              <Avatar onClick={handleClick} sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Icons>
          </StyledToolbar>
          <Menu anchorEl={anchorElm} open={open} onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <MenuItem onClick={handleClose}><Link to='/profile'>Profile</Link></MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Container>
      </AppBar >
    </>
  )
}

export default Header
import { Box, Button, ImageList, ImageListItem, styled, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Boy profile',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1596380671736-dda83e0d4ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxvdXRkb29ycyUyMG1lZXRpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee table',
  }
];

const StyledBox = styled(Box)(({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 70,
  maxWidth: '1200px',
  width: 'calc(100% - 74px)',
  margin: "7rem auto"
}));

const BoxButton = styled(Box)(({
  display: 'flex',
  marginTop: '35px',
  gap: 15
}));


const Home = () => {

  const navigate = useNavigate();

  return (
    <StyledBox>
      <Box flex={1} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography display='inline' variant="h2" component="h2" color="initial">
          Reach all your contacts in one place and build your profile with
          <Typography display='inline' variant="h2" component="span" color="initial" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
            &nbsp;WINDVIEW
          </Typography>
        </Typography>
        <BoxButton>
          <Button variant='contained' color='secondary' onClick={() => { navigate('/') }}>get started</Button>
          <Button variant='outlined' color='primary' onClick={() => { navigate('/network') }}>Browse Network</Button>
        </BoxButton>
      </Box>
      <Box>
        <Box sx={{ margin: '0 auto', width: 500, height: 450 }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map(item => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      {/* <Link to='/add-profile'>get started</Link> */}
      {/* <input type="text" placeholder='search for network' /> */}
    </StyledBox>
  )
}

export default Home
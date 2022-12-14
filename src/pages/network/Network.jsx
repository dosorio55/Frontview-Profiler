import { alpha, Box, Divider, InputBase, Pagination, Paper, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../context/api/context';
import NetworkItem from './components/NetworkItem';
import './Network.scss'

/* const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  maxWidth: "1200px",
  margin: "1.125rem auto",
  padding: "1.5rem"
})); */

const UsersBox = styled(Box)(({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 25,
  padding: "1.125rem",

}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '1px solid',
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

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '7rem',
      '&:focus': {
        width: '15rem',
      },
    },
  },
}));

const Network = () => {

  const params = useParams();

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/profiles`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      })

  }, []);

  const pageNumbers = Math.ceil(profiles.length / 9);

  const pageLimit = 9;
  const from = pageLimit * (page - 1);
  const to = from + pageLimit

  const filteredNetworks = profiles.slice(from, to).filter((filteredData) => {
    return filteredData.name.toLowerCase().includes(search)
  });

  console.log(page);

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  };

  // console.log(Math.ceil(profiles.length / 9));
  return (
    <Box borderRadius>
      <Paper>
        <UsersBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle2" component="p" color="initial">
            NETWORK
          </Typography>

          <Search>
            <SearchIconWrapper>
              <BiSearchAlt />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
          </Search>

        </UsersBox>
        <Divider />

        <UsersBox>
          {filteredNetworks.map((network) =>
            <NetworkItem key={network._id} networkItem={network} />)}
        </UsersBox>
        <Pagination count={pageNumbers} onChange={handleChange} variant="outlined" color="secondary" size='medium'
          sx={{ display: "flex", justifyContent: "flex-end", p: "0.4rem" }} />
      </Paper>
    </Box>
  )
}

export default Network
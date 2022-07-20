import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 0,
  backgroundColor: alpha('#000', 0),
  padding: 0,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  padding: 0,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: '14px',
    color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '20ch',
        borderBottom: "1px solid #000",
      },
    },
  },
}));

export default function SearchBar() {

  const [search, setSearch] = useState('');

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search' }}
            type="search" 
            onChange={searcher}
        />
    </Search>
  );
}
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import './header.css';

export default function SearchField() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(ev.target.value);
  };


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: alpha(theme.palette.common.white, 0.08),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    margin: 0,
    width: '90%',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2, 0, `${8 * 2}px`),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledIcon = styled(SearchIcon)(({theme}) => ({
    paddingRight: '8px',
    opacity: '0.4'
  }))
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: '40px',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  return (
    <Search>
      <SearchIconWrapper>
        <StyledIcon/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Global search"
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={handleChange}
      />
  </Search>
  )
}
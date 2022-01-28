import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import SearchField from './Search';
import './header.css';
import CustomLink from './CustomLink';

export default function Header() {
  return (
    <AppBar position="static" 
    sx={{ 
      flex: '0 0 25%', 
      flexDirection: 'row', 
      alignItems: 'center', 
      height: '80px',
      p: 0, 
      m: 0 }}
    >
      <Container
        sx={{
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1700px',
          margin: '0 auto',
          pt: 0,       }}
      >
        <Typography 
        className="header__logo" 
        sx={{
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '21px',
          color: 'inherit'
        }}
        >
          Inventory
        </Typography>
        <Toolbar>
           <CustomLink to="rooms" className="header__link">
                Rooms
            </CustomLink>
            <CustomLink to="users" className="header__link">
                Users
            </CustomLink>
            <CustomLink to="storage" className="header__link">
                Storage
            </CustomLink>
        </Toolbar>
        <SearchField />
        </Container>
    </AppBar>
  );
}




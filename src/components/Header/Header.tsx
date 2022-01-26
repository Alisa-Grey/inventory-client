import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SearchField from './Search';
import './header.css';

export default function Header() {
  return (
    <AppBar position="static" sx={{ flex: '0 0 25%', flexDirection: 'row', alignItems: 'center', p: 0 }}>
      <div className="header__container">
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
           <Link to="rooms" className="header__link">
                <Typography className="header__link-text">Rooms</Typography>
            </Link>
            <Link to="users" className="header__link">
                <Typography className="header__link-text">Users</Typography>
            </Link>
            <Link to="storage" className="header__link">
                <Typography className="header__link-text">Storage</Typography>
            </Link>
        </Toolbar>
        <SearchField />
        </div>
    </AppBar>
  );
}




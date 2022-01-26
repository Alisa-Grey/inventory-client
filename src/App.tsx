import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Container } from '@mui/material';
import { theme } from './theme'
import Header from './components/Header/Header';
import Items from './components/Items';
import Users from './components/Users';
import Rooms from './components/Rooms/Rooms';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
            <Header /> 
            <Container className="container">           
                <Routes>
                    <Route path="/items" element={<Items />}></Route> 
                    <Route path="/users" element={<Users />}></Route> 
                    <Route path="/rooms" element={<Rooms rooms={[]} />}></Route> 
                </Routes>
              </Container>    
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

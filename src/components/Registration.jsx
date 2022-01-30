import React, { useState }  from "react";
import { useDispatch }  from 'react-redux';
import {
    Container,
    Box,
    Typography,
    Button,
    TextField,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import { REGISTER_REQUEST } from "../actions/types";

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [admin, setAdmin] = useState(false);

  const registrationHandler = (ev) => {
    dispatch({
      type: REGISTER_REQUEST,
      employee: { name, lastName, email, password, phone, admin },
    });
  };

    return (
        <Container
        sx={{
          display: 'flex',
          pt: '10%',
          pr: '20%',
          pl: '20%',
          pb: '20%',
        }}
      >
        <Box
          component="form"
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            mb: 2,
          }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Create new account
          </Typography>
          <TextField
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            label="First Name"
            sx={{
              mb: 1,
            }}
          />
          <TextField
            id="lastName"
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
            label="Last Name"
            sx={{
              mb: 1,
            }}
          />
          <TextField
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            label="E-mail"
            sx={{
              mb: 1,
            }}
          />   
          <TextField
            id="pasword"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            label="Password"
            type="password"
            sx={{
              mb: 1,
            }}
          />
        <TextField
            id="phone"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            label="Phone"
            type="phone"
            sx={{
              mb: 1,
            }}
          />
          <FormControlLabel 
            control={<Checkbox />} 
            label="Admin" 
            value={admin}
            onChange={() => {setAdmin(!admin)}}
          />
          <Button
            variant="contained"
            sx={{
              width: 1 / 3,
            }}
            onClick={registrationHandler}
          >
            Register
          </Button>
        </Box>
      </Container>
    )
};

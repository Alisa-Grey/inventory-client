import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Container,
    Box,
    Typography,
    Button,
    TextField,
} from '@mui/material';
import { LOGIN_REQUEST } from "../redux/actions/types";

export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        dispatch({
          type: LOGIN_REQUEST,
          employee: { email, password },
        });
      };
   
    return (
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" component="h2">
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              mb: 2,
            }}
          >
            <TextField
              id="email"
              type="email"
              label="E-mail"
              sx={{
                mb: 1,
              }}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <TextField
              id="pasword"
              label="Password"
              type="password"
              sx={{
                mb: 1,
              }}
              value={password}
              onChangeCapture={(ev) => setPassword(ev.target.value)}
            />
            <Button
              variant="contained"
              sx={{ width: 1 / 4 }}
              onClick={loginHandler}
            >
              Log in
            </Button>
          </Box>
        </Container>
    );
  }
  
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Container, Typography, List, ListItem} from '@mui/material';
import {  GET_EMPLOYEES_REQUEST } from '../actions/types';

export default function Users() {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees.result);

    useEffect(() => {
        dispatch({type: GET_EMPLOYEES_REQUEST})
    }, [dispatch])

    return (
        <Container>
           <Typography sx={{
                fontWeight:700,
                fontSize:'24px',
                lineHeight:'28px'
            }}>
                Users
            </Typography>
        <List>
        {
            employees.map((employee) => 
            <ListItem>{employee.name} {employee.lastName}</ListItem>
            )
        }
        </List>
        <Typography></Typography>
    </Container>
    )
};
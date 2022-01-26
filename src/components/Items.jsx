import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, ListItem, Typography } from '@mui/material';
import { GET_INVENTORIES_REQUEST } from '../actions/types'

export default function Items() {
    const dispatch = useDispatch();
    const inventories = useSelector((state) => state.inventories.result);

    useEffect(() => {
        dispatch({ type: GET_INVENTORIES_REQUEST });
    }, [dispatch]);
    
    return (
        <Container>
               <Typography sx={{
                fontWeight:700,
                fontSize:'24px',
                lineHeight:'28px'
            }}>
                Items
            </Typography>
            <List>
            {
                inventories.map((inventory) => 
                <ListItem key={inventory.id}>{inventory.name} at {inventory.roomName}</ListItem>
                )
            }
            </List>
        </Container>
    )
};
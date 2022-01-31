import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, ListItem, Typography } from '@mui/material';
import { ItemActionTypes } from "../redux/actions/types";

export default function Storage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ItemActionTypes.GET_ITEMS_REQUEST });
    }, [dispatch]);
    
    return (
        <Container>
            <iframe src="https://gifer.com/embed/Fpwe"></iframe>
        </Container>
    )
};
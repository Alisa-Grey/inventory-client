import React from 'react';
import { Typography } from '@mui/material';
import { StyledInputBase } from '../LocalSerach';
import { defaultTheme } from '../../theme';

interface IInputAttributes {
    setParam: any;
}

const RoomInput:React.FC<IInputAttributes> = ({ setParam }) => {
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
          } = ev;
          setParam(value);
        };

    return (
        <>
            <Typography variant='body1' sx={{mb: defaultTheme.spacing(3)}}>Add Room</Typography>
            <StyledInputBase sx={{width: '100%', mb: 3}} placeholder='Room Name' onChange={handleChange}/>
        </>
    )
}

export default RoomInput;
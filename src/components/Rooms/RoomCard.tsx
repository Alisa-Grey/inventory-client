import React from 'react';
import { Typography, Button, ListItem } from '@mui/material';
import { IRoom } from '../../types/types';
import './room.css';

interface RoomCardProps {
  room: IRoom;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {

  return (
    <>
      <ListItem className="list-item">
        <Typography className="list-item__title" sx={{fontWeight:700, fontSize:'22px'}}>{room.name}</Typography>
        <Button 
          color='info'
          sx={{
            position:'absolute',
            p:'20px 25px',
            top:'20px',
            right:'20px',
            borderRadius:'5px',
            textTransform:'none',
            backgroundColor:'#eff2f6',
            '&:hover': {
              backgroundColor: '#e4ecf7'
            },
            '&:active': {
              backgroundColor: '#dae7f7'
            },
            '&:disabled': {
              opacity: 0.4
            }
          }}
        >
          Edit
        </Button>
      </ListItem>
    </>
  );
};

export default RoomCard;
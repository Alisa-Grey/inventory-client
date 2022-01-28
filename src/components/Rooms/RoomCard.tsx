import React from 'react';
import { Typography, ListItem } from '@mui/material';
import { IRoom } from '../../types/types';
import './room.css';
import EditModal from './EditRoom';

interface RoomCardProps {
  room: IRoom;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {

  return (
    <>
      <ListItem className="list-item">
        <Typography className="list-item__title" sx={{fontWeight:700, fontSize:'22px'}} variant="h2" >{room.name}</Typography>
        <EditModal />
      </ListItem>
    </>
  );
};

export default RoomCard;
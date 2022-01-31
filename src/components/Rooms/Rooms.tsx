import React, { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { List, Typography, Toolbar, Divider } from '@mui/material';
import { RoomActionTypes } from "../../redux/actions/types";
import Room from "./RoomCard";
import LocalSearch from "../LocalSerach";
import CustomSelect from "../Select";
import { IRoom } from "../../types/types";
import "../../index.css";
import AddModal from './AddRoom';

interface RoomsProps {
    rooms: IRoom[]
}

const Rooms: React.FC<RoomsProps> = ({rooms}) => {
    const dispatch = useDispatch();
    let roomList = useSelector((state: RootStateOrAny) => state.rooms.rooms);
    let namesList = roomList.map((room: { name: string; }) => room.name)

    const [roomName, setRoomName] = React.useState<string[]>([]);
    const [ searchParam, setSearchParam ] = React.useState<string>('');

    useEffect(() => {
        dispatch({ type: RoomActionTypes.GET_ROOMS_REQUEST });
    }, [dispatch]);

    if (roomName.length > 0) {
        roomList = roomList.filter((item: IRoom) => roomName.includes(item.name))
    }
    roomList = roomList.filter((item: IRoom) => item.name.toLowerCase().includes(searchParam))

    return (
        <>
            <Typography sx={{ mb: 4 }} variant="h1">
                Rooms
            </Typography>
            
            <Toolbar sx={{ mb: 6, px: 0 }}>
                <AddModal />
                <Divider orientation="vertical" variant="middle" flexItem color="#dee1e7" sx={{mx: 5}}/>
                <LocalSearch placeholderText="Search" setParam={setSearchParam}/>
                <CustomSelect placeholderText="Room" nameArray={namesList} value={roomName} setValue={setRoomName} />
              </Toolbar>

            <List sx={{display:'flex', flexWrap: 'wrap'}}>
                { roomList.map((room: IRoom) => <Room key={room.id} room={room}/>) }
            </List>
        </>
    )
};

export default Rooms;
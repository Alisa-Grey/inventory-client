import React, { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { List, Typography, Toolbar, Divider } from '@mui/material';
import { GET_ROOMS_REQUEST } from "../../actions/types";
import Room from "./RoomCard";
import AddButton from '../AddButton';
import LocalSearch from "../LocalSerach";
import StyledInputBase from "../LocalSerach";
import CustomSelect from "../Select";
import { IRoom } from "../../types/types";
import "../../index.css";

interface RoomsProps {
    rooms: IRoom[]
}

const Rooms: React.FC<RoomsProps> = ({rooms}) => {
    const dispatch = useDispatch();
    let roomList = useSelector((state: RootStateOrAny) => state.rooms.result);
    let namesList = roomList.map((room: { name: string; }) => room.name)

    const [roomName, setRoomName] = React.useState<string[]>([]);
    const [ searchParam, setSearchParam ] = React.useState<string>('');
    
    if (roomName.length > 0) {
        roomList = roomList.filter((item: IRoom) => roomName.includes(item.name))
    }

    useEffect(() => {
        dispatch({ type: GET_ROOMS_REQUEST });
    }, [dispatch]);

    const btnHandler = () => {
        console.log('click')
    }

    const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
        let searchValue = ev.target.value.toLocaleLowerCase();
        setSearchParam(searchValue)
        roomList = roomList.filter((item: IRoom) => item.name.toLowerCase().includes(searchParam))
        return roomList
    }

    return (
        <>
            <Typography sx={{
                mb: 4,
                fontWeight:700,
                fontSize:'24px',
                lineHeight:'28px'
            }}>
                Rooms
            </Typography>

            <Toolbar sx={{ mb: 6, px: 0 }}>
                <AddButton variant={'contained'} onClick={btnHandler} >
                    Add room
                </AddButton>
                <Divider orientation="vertical" variant="middle" flexItem color="#dee1e7" sx={{mx: 5}}/>
                <StyledInputBase placeholder="Search" onChange={handleSearch}/>
                {/* <LocalSearch onChange={handleSearch}/> */}
                <CustomSelect placeholderText="Room" nameArray={namesList} value={roomName} setValue={setRoomName} />
              </Toolbar>

            <List sx={{display:'flex', flexWrap: 'wrap'}}>
                { roomList.map((room: IRoom) => <Room key={room.id} room={room}/>) }
            </List>
        </>
    )
};

export default Rooms;
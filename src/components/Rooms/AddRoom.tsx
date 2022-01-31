import * as React from 'react';
import StyledButton from '../StyledButton';
import { StyledInputBase } from '../LocalSerach';
import { defaultTheme, secondaryTheme } from '../../theme';
import { Box, Typography, Button, Modal, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { IconButton } from '@mui/material';
import RemoveIcon from '../Icons/RemoveIcon'
import { useAppDispatch, useTypedSelector } from '../../redux/hooks/hooks';
import { RoomActionTypes } from '../../redux/actions/types';

export default function AddModal(): JSX.Element {
    const dispatch = useAppDispatch();
    const { rooms, loading } = useTypedSelector(state => state.rooms);

    const [open, setOpen] = React.useState(false);
    const [roomNames, setRoomNames] = React.useState([''])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) => {
      const { target: { value }, } = ev;
      const rooms = [...roomNames];
      rooms[index] = value;
      setRoomNames(rooms);
    }

    const addInput = () => {
      setRoomNames([...roomNames, '']);
      dispatch({type: RoomActionTypes.ADD_ROOM_REQUEST, payload: roomNames})
    }

    const removeInput = (index: number) => () => {
        setRoomNames((roomName) => {
          const roomList = [...roomName];
          roomList.splice(index, 1);
          return roomList;
        });
    }

    const handleSave = () => {
      console.log(roomNames);

  }

  return (
    <>
      <StyledButton variant={'contained'} onClick={handleOpen} >
        + Add room
      </StyledButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '640px',
            bgcolor: 'background.paper',
            border: 'none',
            pt: '70px',
        }}>
            <Box sx={{ px: 14 }}>
                <Typography id="modal-modal-title" component="h1" variant='h1' sx={{mb: defaultTheme.spacing(8)}}>
                    Add room
                </Typography>
               
                {roomNames.map((name, index) => (
                  <Stack key={index} sx={{mb: 3}}>
                    <Typography variant='body1' sx={{mb: defaultTheme.spacing(3)}}>Add Room</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                      <StyledInputBase sx={{width: '100%', mr: 0}} placeholder='Room Name' value={name} onChange={(ev) => handleChange(ev, index)}/>
                      {
                        roomNames.length !== 1 && 
                        <IconButton 
                          sx={{
                            width: 'fit-content',
                            mr: '17px',
                            p: 0
                          }}
                          onClick={removeInput(index)}
                        >
                          <RemoveIcon />
                        </IconButton>
                      }
                    </Box>
                  </Stack>
                ))}
                                
                <ThemeProvider theme={secondaryTheme}>
                    <Button variant='contained' sx={{mt: 3}} onClick={addInput}>+ Add Rooms</Button>
                </ThemeProvider>
            </Box>

            {/* footer */}
            <Box 
                sx={{
                    position: 'fixed',
                    right: 0,
                    bottom: 0,
                    width: 'inherit',
                    maxWidth: '640px',
                    px: 14, 
                    py: 5,
                    backgroundColor: '#f8f8f8'
                }}
            >
                <StyledButton variant={'contained'} onClick={handleSave}>Save</StyledButton>
                <Button 
                    sx={{
                        ml: 3,
                        color: defaultTheme.palette.primary.light,
                        backgroundColor: 'rgba(149,158,172,0.2)'
                    }}
                    onClick={handleClose}
                >
                    Close
                </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

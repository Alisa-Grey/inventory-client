import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { secondaryTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={secondaryTheme}>
        <Button 
            variant='contained'
            sx={{
                position:'absolute',
                top:'20px',
                right:'20px',
            }}
            onClick={handleOpen}
        >
            Edit
        </Button>
        </ThemeProvider>
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
            left: '69%',
            bottom: 0,
            width: '640px',
            bgcolor: 'background.paper',
            border: 'none',
            p: '70px',
        }}>
          <Typography id="modal-modal-title" component="h1" variant='h1'>
            Edit room
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
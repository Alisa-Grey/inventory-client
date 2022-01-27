import * as React from 'react';
import { InputBase } from '@mui/material';
import { theme } from '../theme';
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)(() => ({
    marginRight: theme.spacing(4),
    '& .MuiInputBase-input': {
        padding: theme.spacing(3,2),
        border: '1px solid #dee1e7',
        borderRadius: theme.shape.borderRadius,
        '&:focus': {
            borderColor: theme.palette.primary.main
        },
        '&:disabled': {
            opacity: 0.7
        }
    },
}));

export default StyledInputBase;

// export default function LocalSearch() {
//     return (
//         <StyledInputBase placeholder='Search' sx={{mr: 4}}></StyledInputBase>
//     )
// }
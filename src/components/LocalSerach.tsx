import { InputBase } from '@mui/material';
import { defaultTheme } from '../theme';
import { styled } from '@mui/material/styles';
import React from 'react';

interface ISearchAttributes {
    placeholderText: string;
    setParam: any;
}

export const StyledInputBase = styled(InputBase)(() => ({
    marginRight: defaultTheme.spacing(4),
    '& .MuiInputBase-input': {
        padding: defaultTheme.spacing(3,2),
        border: '1px solid #dee1e7',
        borderRadius: defaultTheme.shape.borderRadius,
        '&:focus': {
            borderColor: defaultTheme.palette.primary.main
        },
        '&:disabled': {
            opacity: 0.7
        }
    },
}));

const LocalSearch:React.FC<ISearchAttributes> = ({ placeholderText, setParam }) => {
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value },
        } = ev;
        setParam(value);
      };
    return (
        <StyledInputBase placeholder={placeholderText} sx={{mr: 4}} onChange={handleChange}></StyledInputBase>
    )
}

export default LocalSearch
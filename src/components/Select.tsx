import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { theme } from '../theme';
import PerfectScrollbar from 'react-perfect-scrollbar'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {

  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxWidth: 250,
    },
    sx: {
      '&::-webkit-scrollbar': {
        width: '12px'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#DEE1E7',
        border: '3px solid #fff',    /* color of the scroll thumb */
        borderRadius: '20px', 
      }
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
];

interface ISelectAttributes {
  text: string;
}

const  CustomSelect:React.FC<ISelectAttributes> = (text) => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const placeholderStyle = {color: '#d5d6d9'}

  return (
    <div>
      <FormControl sx={{ width: 300, color: 'blue' }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={placeholderStyle}>Search {text.text}</span>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Filter items' }}
          sx={{
            color: theme.palette.primary.main, 
            '&:disabled': { opacity: 0.7 },
       
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} sx={{color: '#6c6f7b'}}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomSelect
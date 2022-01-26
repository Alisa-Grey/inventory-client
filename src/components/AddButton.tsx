import React from 'react';
import { Button } from '@mui/material';

interface IBtnProps {
  children?: React.ReactNode;
  onClick: () => void;
  variant?: any;
}

const AddButton: React.FC<IBtnProps> = ({ children, onClick, variant }) => {
  return (
    <Button 
      variant={variant}
      onClick={onClick}
    >
      + {children}
    </Button>
  )
}

export default AddButton;
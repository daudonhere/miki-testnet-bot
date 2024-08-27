import React from 'react';
import Button from '@mui/material/Button';

interface MyButtonProps {
  label: string;
  onClick: () => void;
}

const SplashScreen: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default SplashScreen;
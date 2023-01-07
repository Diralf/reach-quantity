import { Typography, TextField, Button } from '@mui/material';
import React from 'react';
import SymbolicDateRange from '../SymbolicDateRange';

const TargetQuantityForm: React.FC = () => {
  return (
    <>
      <Typography variant="h2" component="h1">Create Target</Typography>
      <TextField label="Name"/>
      <TextField label="Quantity"/>
      <TextField label="Measure"/>
      <SymbolicDateRange/>
      <Button>Submit</Button>
    </>
  );
};

export default TargetQuantityForm;

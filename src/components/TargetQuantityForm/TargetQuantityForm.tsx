import { Typography, TextField, Button, Grid } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DateRange } from '../../constants/symbolic-range';
import SymbolicDateRange from '../SymbolicDateRange';

export interface TargetQuantityFormValues {
  name: string;
  quantity: number;
  measure: string;
  dateRange: DateRange | '';
}

interface Props {
  onSubmit(): void;
}

const TargetQuantityForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
  } = useForm<TargetQuantityFormValues>({
    defaultValues: {
      dateRange: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" gap={2}>
        <Typography variant="h2" component="h1">Create Target</Typography>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField label="Name" {...field}/>
          )}
        />
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <TextField label="Quantity" type="number" {...field}/>
          )}
        />
        <Controller
          name="measure"
          control={control}
          render={({ field }) => (
            <TextField label="Measure" {...field}/>
          )}
        />
        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <SymbolicDateRange label="Date Range" {...field}/>
          )}
        />
        <Button variant="contained" type="submit">Submit</Button>
      </Grid>
    </form>
  );
};

export default TargetQuantityForm;

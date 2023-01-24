import { Typography, TextField, Button, Grid } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SymbolicRange } from '../../constants/symbolic-range';
import { CreateTargetParams } from '../../types/models/create-target-params';
import SymbolicDateRange from '../SymbolicDateRange';

export interface TargetQuantityFormValues {
  name: string;
  quantity: number;
  measure: string;
  dateRange: SymbolicRange | '';
}

interface Props {
  onSubmit(params: CreateTargetParams): Promise<void>;
}

const TargetQuantityForm: React.FC<Props> = ({ onSubmit }): JSX.Element => {
  const {
    control,
    handleSubmit,
  } = useForm<TargetQuantityFormValues>({
    defaultValues: {
      name: '',
      quantity: 0,
      measure: '',
      dateRange: '',
    },
  });

  const handleFormSubmit = (values: TargetQuantityFormValues): void => {
    if (values.dateRange) {
      onSubmit({
        name: values.name,
        quantity: values.quantity,
        measurement: values.measure,
        period: values.dateRange,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
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

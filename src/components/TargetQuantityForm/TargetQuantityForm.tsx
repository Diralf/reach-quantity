import { Typography, TextField, Button, Grid } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SymbolicPeriod } from '../../constants/symbolic-period';
import { CreateTargetParamsDto } from '../../types/dto/create-target-params.dto';
import SymbolicPeriodSelector from '../SymbolicPeriodSelector';

export interface TargetQuantityFormValues {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod | '';
}

interface Props {
  onSubmit(params: CreateTargetParamsDto): Promise<void>;
}

const TargetQuantityForm: React.FC<Props> = ({ onSubmit }): JSX.Element => {
  const {
    control,
    handleSubmit,
  } = useForm<TargetQuantityFormValues>({
    defaultValues: {
      name: '',
      quantity: 0,
      measurement: '',
      period: '',
    },
  });

  const handleFormSubmit = (values: TargetQuantityFormValues): void => {
    if (values.period) {
      onSubmit({
        name: values.name,
        quantity: values.quantity,
        measurement: values.measurement,
        period: values.period,
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
          name="measurement"
          control={control}
          render={({ field }) => (
            <TextField label="Measurement" {...field}/>
          )}
        />
        <Controller
          name="period"
          control={control}
          render={({ field }) => (
            <SymbolicPeriodSelector label="Period" {...field}/>
          )}
        />
        <Button variant="contained" type="submit">Create</Button>
      </Grid>
    </form>
  );
};

export default TargetQuantityForm;

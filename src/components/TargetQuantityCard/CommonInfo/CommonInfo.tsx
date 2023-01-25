import { Grid, Typography } from '@mui/material';
import React from 'react';
import { SymbolicPeriod } from '../../../constants/symbolic-period';

interface Props {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
}

const CommonInfo: React.FC<Props> = ({
  name,
  quantity,
  measurement,
  period,
}) => (
  <Grid container direction="column">
    <Grid container gap={1}>
      <Typography component="strong" fontWeight="bold">Name</Typography>
      <Typography component="span">{name}</Typography>
    </Grid>
    <Grid container gap={1}>
      <Typography component="strong" fontWeight="bold">Target</Typography>
      <Typography component="span">{quantity} {measurement}</Typography>
    </Grid>
    <Grid container gap={1}>
      <Typography component="strong" fontWeight="bold">For</Typography>
      <Typography component="span">{period}</Typography>
    </Grid>
  </Grid>
);

export default CommonInfo;

import { Grid, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import React from 'react';
import { SymbolicPeriod } from '../../../constants/symbolic-period';
import { formatDate } from '../../../services/date-time/date-time';

interface Props {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  startDate: DateTime;
  endDate: DateTime;
}

const CommonInfo: React.FC<Props> = ({
  name,
  quantity,
  measurement,
  period,
  startDate,
  endDate,
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
    <Grid container gap={1}>
      <Typography component="strong" fontWeight="bold">Dates</Typography>
      <Typography component="span">{formatDate(startDate)} - {formatDate(endDate)}</Typography>
    </Grid>
  </Grid>
);

export default CommonInfo;

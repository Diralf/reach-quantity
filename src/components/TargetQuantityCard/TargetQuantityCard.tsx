import { CardContent, Grid, Typography, Card } from '@mui/material';
import React from 'react';
import { SymbolicRange } from '../../constants/symbolic-range';

interface Props {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicRange;
}

const TargetQuantityCard: React.FC<Props> = ({
  name,
  quantity,
  measurement,
  period,
}): JSX.Element => (
  <Card aria-label="Paper Cranes card">
    <CardContent>
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
        <Grid container gap={1} direction="column">
          <Typography component="span">Today target</Typography>
          <Typography variant="h2">5</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" gap={1}>
        <Grid container aria-label="Day 1" direction="column" width="auto">
          <Typography component="strong" fontWeight="bold">Day 1</Typography>
          <Typography component="span">5</Typography>
        </Grid>
        <Grid container aria-label="Day 2" direction="column" width="auto">
          <Typography component="strong" fontWeight="bold">Day 2</Typography>
          <Typography component="span">5</Typography>
        </Grid>
        <Grid container aria-label="Day 3" direction="column" width="auto">
          <Typography component="strong" fontWeight="bold">Day 3</Typography>
          <Typography component="span">5</Typography>
        </Grid>
        <Grid container aria-label="Day 4" direction="column" width="auto">
          <Typography component="strong" fontWeight="bold">Day 4</Typography>
          <Typography component="span">5</Typography>
        </Grid>
        <Grid container aria-label="Day 5" direction="column" width="auto">
          <Typography component="strong" fontWeight="bold">Day 5</Typography>
          <Typography component="span">5</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TargetQuantityCard;

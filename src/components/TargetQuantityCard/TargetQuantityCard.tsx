import { CardContent, Grid, Typography, Card, TextField } from '@mui/material';
import { DateTime } from 'luxon';
import React from 'react';

interface Props {
  id: number;
  name: string;
  todayTarget: number;
  todayReached: number;
  CommonInfo: React.ReactNode;

  onTodayReachedChange(value: number, targetId: number): void;
}

const TargetQuantityCard: React.FC<Props> = ({
  id,
  CommonInfo,
  name,
  todayTarget,
  todayReached,
  onTodayReachedChange,
}): JSX.Element => (
  <Card aria-label={`${name} card`}>
    <CardContent>
      {CommonInfo}
      <Grid container direction="column" aria-label="Today">
        <Grid container gap={1} direction="column" aria-label="Today target">
          <Typography component="span">Today target ({DateTime.utc().toISODate()})</Typography>
          <Typography variant="h2">{todayTarget}</Typography>
        </Grid>
        <Grid>
          <TextField
            type="number"
            label="Reached today"
            value={todayReached}
            onChange={(event) => {
              onTodayReachedChange(Number(event.target.value), id);
            }}
          />
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

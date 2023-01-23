import { Grid } from '@mui/material';
import React from 'react';
import { Target } from '../../types/models/target';
import TargetQuantityCard from '../TargetQuantityCard';

interface Props {
  targets: Target[];
}

const TargetQuantityList: React.FC<Props> = ({ targets }) => (
  <Grid container direction="column" gap={2}>
    {targets.map(({
      id,
      ...target
    }) => <TargetQuantityCard key={id} {...target} />)}
  </Grid>
);

export default TargetQuantityList;

import { Grid } from '@mui/material';
import React from 'react';
import { Target } from '../../types/view/target';
import TargetQuantityCard from '../TargetQuantityCard';
import CommonInfo from '../TargetQuantityCard/CommonInfo';

interface Props {
  targets: Target[];
}

const TargetQuantityList: React.FC<Props> = ({ targets }) => (
  <Grid container direction="column" gap={2}>
    {targets.map(({
      id,
      name,
      commonInfo,
      ...target
    }) => (
      <TargetQuantityCard
        key={id}
        name={name}
        CommonInfo={() => <CommonInfo name={name} {...commonInfo}/>}
        {...target}
      />
    ))}
  </Grid>
);

export default TargetQuantityList;

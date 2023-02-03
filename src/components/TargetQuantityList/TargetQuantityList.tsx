import { Grid } from '@mui/material';
import React from 'react';
import { TargetDto } from '../../types/models/target.dto';
import TargetQuantityCard from '../TargetQuantityCard';
import CommonInfo from '../TargetQuantityCard/CommonInfo';

interface Props {
  targets: TargetDto[];
}

const TargetQuantityList: React.FC<Props> = ({ targets }) => (
  <Grid container direction="column" gap={2}>
    {targets.map(({
      id,
      name,
      ...target
    }) => (
      <TargetQuantityCard
        key={id}
        name={name}
        CommonInfo={<CommonInfo name={name} {...target}/>}
        {...target}
      />
    ))}
  </Grid>
);

export default TargetQuantityList;

import { Grid } from '@mui/material';
import { TargetDto } from '@reach-quantity/types';
import React from 'react';
import TargetQuantityCard from '../TargetQuantityCard';
import CommonInfo from '../TargetQuantityCard/CommonInfo';

interface Props {
  targets: TargetDto[];

  onTodayReachedChange(value: number, targetId: number): void;
}

const TargetQuantityList: React.FC<Props> = ({
  targets,
  onTodayReachedChange,
}) => (
  <Grid container direction="column" gap={2}>
    {targets.map(({
      id,
      name,
      ...target
    }) => (
      <TargetQuantityCard
        key={id}
        id={id}
        name={name}
        CommonInfo={<CommonInfo name={name} {...target}/>}
        onTodayReachedChange={onTodayReachedChange}
        {...target}
      />
    ))}
  </Grid>
);

export default TargetQuantityList;

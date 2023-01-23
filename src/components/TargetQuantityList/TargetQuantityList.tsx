import React from 'react';
import { Target } from '../../types/models/target';
import TargetQuantityCard from '../TargetQuantityCard';

interface Props {
  targets: Target[];
}

const TargetQuantityList: React.FC<Props> = ({ targets }) => (
  <>
    {targets.map(({
      id,
      ...target
    }) => <TargetQuantityCard key={id} {...target} />)}
  </>
);

export default TargetQuantityList;

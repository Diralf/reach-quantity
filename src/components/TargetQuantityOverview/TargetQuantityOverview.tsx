import React from 'react';
import TodayTarget from './TodayTarget';

interface Props {
  id: number;
  children: React.ReactNode;
}

const TargetQuantityOverview: React.FC<Props> = ({ children }) => (
  <>{children}</>
);

const TargetQuantityOverviewC = Object.assign(TargetQuantityOverview, {
  TodayTarget,
});

export default TargetQuantityOverviewC;

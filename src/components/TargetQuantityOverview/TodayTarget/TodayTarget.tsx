import React from 'react';

interface Props {
  todayTarget?: number;
}

const TodayTarget: React.FC<Props> = ({ todayTarget }) => (
  <>{todayTarget}</>
);

export default TodayTarget;

import { DateTime } from 'luxon';

export const getTargetForDate = (currentDate: DateTime, targets: number[], startDate: DateTime): number => {
  const offset = Math.floor(currentDate.diff(startDate, 'days').days);
  return targets[offset];
};

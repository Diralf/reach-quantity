import { DateTime } from 'luxon';

export const getTargetForDate = (specificDate: DateTime, targets: number[], targetsStartDate: DateTime): number => {
  const offset = Math.floor(specificDate.diff(targetsStartDate, 'days').days);
  return targets[offset];
};

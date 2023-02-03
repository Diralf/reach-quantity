import { DateTime } from 'luxon';
import { calculateRemainTargets } from './calculate-remain-targets';
import { getTargetForDate } from './get-target-for-date';

interface Props {
  periodEndDate: DateTime;
  targetOverall: number;
  reachedOverall: number;
}

export const getTodayTarget = ({
  periodEndDate,
  targetOverall,
  reachedOverall,
}: Props): number => {
  const currentDate = DateTime.utc().startOf('day');
  const targetsStartDate = currentDate;

  const targets = calculateRemainTargets(targetOverall - reachedOverall, targetsStartDate, periodEndDate);
  return getTargetForDate(currentDate, targets, targetsStartDate);
};

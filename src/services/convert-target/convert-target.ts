import { DateTime } from 'luxon';
import { TargetDto } from '../../types/models/targetDto';
import { Target } from '../../types/view/target';
import { getExactDatesFromPeriod } from '../period-dates/period-dates';
import { calculateRemainTargets } from '../target-calculation/calculate-remain-targets';
import { getTargetForDate } from '../target-calculation/get-target-for-date';

export const convertTargetFromDto = (targetDto: TargetDto): Target => {
  const todayDate = DateTime.utc();
  const [startDate, endDate] = getExactDatesFromPeriod(targetDto.period);
  const targets = calculateRemainTargets(targetDto.quantity, startDate, endDate);
  const todayTarget = getTargetForDate(todayDate, targets, todayDate);
  return {
    id: targetDto.id,
    name: targetDto.name,
    todayTarget,
    commonInfo: {
      quantity: targetDto.quantity,
      measurement: targetDto.measurement,
      period: targetDto.period,
      startDate,
      endDate,
      createdOn: DateTime.fromJSDate(targetDto.createdOn, { zone: 'utc' }),
    },
  };
};

import { DateTime } from 'luxon';
import { TargetDto } from '../../types/models/targetDto';
import { Target } from '../../types/view/target';
import { getExactDatesFromPeriod } from '../period-dates/period-dates';
import { getTodayTarget } from '../target-calculation/get-today-target';

export const convertTargetFromDto = (targetDto: TargetDto): Target => {
  const createdOn = DateTime.fromJSDate(targetDto.createdOn, { zone: 'utc' }).startOf('day');
  const [startDate, endDate] = getExactDatesFromPeriod(targetDto.period, createdOn);
  const todayTarget = getTodayTarget({
    periodEndDate: endDate,
    targetOverall: targetDto.quantity,
    reachedOverall: 0,
  });
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
      createdOn,
    },
  };
};

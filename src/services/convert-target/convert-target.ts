import { DateTime } from 'luxon';
import { TargetEntity } from '../../types/entities/target.entity';
import { TargetDto } from '../../types/models/target.dto';
import { getExactDatesFromPeriod } from '../period-dates/get-exact-dates-from-period';
import { getTodayTarget } from '../target-calculation/get-today-target';

export const convertTargetFromEntityToDto = (targetDto: TargetEntity): TargetDto => {
  const createdOn = DateTime.fromJSDate(targetDto.createdOn, { zone: 'utc' }).startOf('day');
  const [periodStartDate, periodEndDate] = getExactDatesFromPeriod({
    period: targetDto.period,
    createdOn,
  });
  const todayTarget = getTodayTarget({
    periodEndDate,
    targetOverall: targetDto.quantity,
    reachedOverall: 0,
  });
  return {
    id: targetDto.id,
    name: targetDto.name,
    todayTarget,
    quantity: targetDto.quantity,
    measurement: targetDto.measurement,
    period: targetDto.period,
    periodStartDate,
    periodEndDate,
    createdOn,
  };
};

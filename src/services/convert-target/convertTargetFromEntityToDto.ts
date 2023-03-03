import { GetTargetsWithReachedQuery, TargetDto } from '@reach-quantity/types';
import { DateTime } from 'luxon';
import { getExactDatesFromPeriod } from '../period-dates/get-exact-dates-from-period';
import { getTodayTarget } from '../target-calculation/get-today-target';

export const convertTargetFromEntityToDto = (targetEntity: GetTargetsWithReachedQuery): TargetDto => {
  const targetOverall = Number(targetEntity.quantity);
  const createdOn = DateTime.fromJSDate(targetEntity.createdOn, { zone: 'utc' })
    .startOf('day');
  const [periodStartDate, periodEndDate] = getExactDatesFromPeriod({
    period: targetEntity.period,
    createdOn,
  });
  const todayTarget = getTodayTarget({
    periodEndDate,
    targetOverall,
    reachedOverall: 0,
  });
  return {
    id: targetEntity.id,
    name: targetEntity.name,
    quantity: targetOverall,
    measurement: targetEntity.measurement,
    period: targetEntity.period,
    periodStartDate,
    periodEndDate,
    createdOn,
    todayTarget,
    todayReached: targetEntity.reachedQuantities[0]?.quantity ?? 0,
  };
};

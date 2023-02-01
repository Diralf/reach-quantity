import { TargetDto } from '../../types/models/targetDto';
import { Target } from '../../types/view/target';
import { getExactDatesFromPeriod } from '../period-dates/period-dates';

export const convertTargetFromDto = (targetDto: TargetDto): Target => {
  const [startDate, endDate] = getExactDatesFromPeriod(targetDto.period);
  return {
    id: targetDto.id,
    name: targetDto.name,
    todayTarget: targetDto.todayTarget,
    commonInfo: {
      quantity: targetDto.quantity,
      measurement: targetDto.measurement,
      period: targetDto.period,
      startDate,
      endDate,
      createdOn: targetDto.createdOn,
    },
  };
};

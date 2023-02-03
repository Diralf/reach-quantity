import { DateTime } from 'luxon';
import { SymbolicPeriod } from '../../constants/symbolic-period';

export const getExactDatesFromPeriod = (period: SymbolicPeriod, createdOn: DateTime): [DateTime, DateTime] => {
  let result: [DateTime, DateTime];
  switch (period) {
    case SymbolicPeriod.CurrentQuarter: {
      const start = createdOn.startOf('quarter');
      const end = createdOn.endOf('quarter');
      result = [
        start,
        end.startOf('day'),
      ];
      break;
    }
    case SymbolicPeriod.Next10Days: {
      const endDt = createdOn.plus({ day: 9 });
      result = [
        createdOn,
        endDt,
      ];
      break;
    }
    case SymbolicPeriod.Next5Days: {
      const endDt = createdOn.plus({ day: 4 });
      result = [
        createdOn,
        endDt,
      ];
      break;
    }
    default:
      result = [
        createdOn,
        createdOn,
      ];
  }
  return result;
};

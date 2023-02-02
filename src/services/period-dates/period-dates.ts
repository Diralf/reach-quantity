import { DateTime } from 'luxon';
import { SymbolicPeriod } from '../../constants/symbolic-period';

export const getExactDatesFromPeriod = (period: SymbolicPeriod): [DateTime, DateTime] => {
  const current = DateTime.utc();
  let result: [DateTime, DateTime];
  switch (period) {
    case SymbolicPeriod.CurrentQuarter: {
      const start = current.startOf('quarter');
      const end = current.endOf('quarter');
      result = [
        start,
        end.startOf('day'),
      ];
      break;
    }
    case SymbolicPeriod.Next10Days: {
      const endDt = current.plus({ day: 9 });
      result = [
        current,
        endDt,
      ];
      break;
    }
    case SymbolicPeriod.Next5Days: {
      const endDt = current.plus({ day: 4 });
      result = [
        current,
        endDt,
      ];
      break;
    }
    default:
      result = [
        current,
        current,
      ];
  }
  return result;
};

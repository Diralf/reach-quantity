import { DateTime } from 'luxon';
import { SymbolicPeriod } from '../../constants/symbolic-period';

export const getExactDatesFromPeriod = (period: SymbolicPeriod, current: Date = new Date()): [Date, Date] => {
  const currentDt = DateTime.fromJSDate(current);
  let result: [Date, Date];
  switch (period) {
    case SymbolicPeriod['Current Quarter']: {
      const start = currentDt.startOf('quarter');
      const end = currentDt.endOf('quarter');
      result = [
        start.toJSDate(),
        end.toJSDate(),
      ];
      break;
    }
    case SymbolicPeriod['Next 10 Days']: {
      const endDt = currentDt.plus({ day: 9 });
      result = [
        current,
        endDt.toJSDate(),
      ];
      break;
    }
    case SymbolicPeriod['Next 5 Days']: {
      const endDt = currentDt.plus({ day: 4 });
      result = [
        current,
        endDt.toJSDate(),
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

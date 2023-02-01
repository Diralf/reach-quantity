import { SymbolicPeriod } from '../../constants/symbolic-period';
import { formatDate } from '../date-time/date-time';
import { getExactDatesFromPeriod } from './period-dates';

describe('period-dates', () => {
  it.each`
    current         | period                               | start           | end
    ${'2023-01-01'} | ${SymbolicPeriod['Next 5 Days']}     | ${'2023-01-01'} | ${'2023-01-05'}
    ${'2022-12-30'} | ${SymbolicPeriod['Next 5 Days']}     | ${'2022-12-30'} | ${'2023-01-03'}
    ${'2023-01-01'} | ${SymbolicPeriod['Next 10 Days']}    | ${'2023-01-01'} | ${'2023-01-10'}

    ${'2023-01-01'} | ${SymbolicPeriod['Current Quarter']} | ${'2023-01-01'} | ${'2023-03-31'}
    ${'2023-02-14'} | ${SymbolicPeriod['Current Quarter']} | ${'2023-01-01'} | ${'2023-03-31'}
    ${'2023-03-31'} | ${SymbolicPeriod['Current Quarter']} | ${'2023-01-01'} | ${'2023-03-31'}

    ${'2023-04-19'} | ${SymbolicPeriod['Current Quarter']} | ${'2023-04-01'} | ${'2023-06-30'}
    ${'2023-08-10'} | ${SymbolicPeriod['Current Quarter']} | ${'2023-07-01'} | ${'2023-09-30'}
    ${'2023-11-05'} | ${SymbolicPeriod['Current Quarter']} | ${'2023-10-01'} | ${'2023-12-31'}
  `('Should return exact dates for period $period when current day is $current', ({
    current,
    period,
    start,
    end,
  }: { current: string, period: SymbolicPeriod, start: string, end: string }) => {
    const expected = [start, end];
    const result = getExactDatesFromPeriod(period, new Date(current)).map(formatDate);

    expect(result).toEqual(expected);
  });
});

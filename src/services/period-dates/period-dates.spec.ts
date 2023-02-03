import { SymbolicPeriod } from '../../constants/symbolic-period';
import { toUtcDateTime } from '../date-time/date-time';
import { getExactDatesFromPeriod } from './period-dates';

describe('period-dates', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.each`
    createdOn       | period                           | start           | end
    ${'2023-01-01'} | ${SymbolicPeriod.Next5Days}      | ${'2023-01-01'} | ${'2023-01-05'}
    ${'2022-12-30'} | ${SymbolicPeriod.Next5Days}      | ${'2022-12-30'} | ${'2023-01-03'}
    ${'2023-01-01'} | ${SymbolicPeriod.Next10Days}     | ${'2023-01-01'} | ${'2023-01-10'}

    ${'2023-01-01'} | ${SymbolicPeriod.CurrentQuarter} | ${'2023-01-01'} | ${'2023-03-31'}
    ${'2023-02-14'} | ${SymbolicPeriod.CurrentQuarter} | ${'2023-01-01'} | ${'2023-03-31'}
    ${'2023-03-31'} | ${SymbolicPeriod.CurrentQuarter} | ${'2023-01-01'} | ${'2023-03-31'}

    ${'2023-04-19'} | ${SymbolicPeriod.CurrentQuarter} | ${'2023-04-01'} | ${'2023-06-30'}
    ${'2023-08-10'} | ${SymbolicPeriod.CurrentQuarter} | ${'2023-07-01'} | ${'2023-09-30'}
    ${'2023-11-05'} | ${SymbolicPeriod.CurrentQuarter} | ${'2023-10-01'} | ${'2023-12-31'}
  `('Should return exact dates for period $period when current day is $current', ({
    createdOn,
    period,
    start,
    end,
  }: { createdOn: string, period: SymbolicPeriod, start: string, end: string }) => {
    const expected = [toUtcDateTime(start), toUtcDateTime(end)];
    const result = getExactDatesFromPeriod(period, toUtcDateTime(createdOn));

    expect(result).toEqual(expected);
  });
});

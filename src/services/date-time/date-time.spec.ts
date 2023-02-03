import { DateTime } from 'luxon';
import { formatDate, toUtcDateTime } from './date-time';

describe('date-time', () => {
  it('Should return formatted date', () => {
    const result = formatDate(toUtcDateTime('2023-01-01'));

    expect(result).toEqual('2023-01-01');
  });

  it('Should set mock current date', () => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));

    const current = DateTime.utc();

    expect(current.toISODate()).toEqual('2023-01-01');
    jest.useRealTimers();
  });
});

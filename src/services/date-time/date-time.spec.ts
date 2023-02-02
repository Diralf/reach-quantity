import { formatDate, toUtcDateTime } from './date-time';

describe('date-time', () => {
  it('Should return formatted date', () => {
    const result = formatDate(toUtcDateTime('2023-01-01'));

    expect(result).toEqual('2023-01-01');
  });
});

import { formatDate } from './date-time';

describe('date-time', () => {
  it('Should return formatted date', () => {
    expect(formatDate(new Date('2023-01-01'))).toEqual('2023-01-01');
  });
});

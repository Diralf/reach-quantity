import { getSymbolicPeriodValues } from './symbolic-period';

describe('SymbolicPeriod', () => {
  it('should return all values', () => {
    const expected = [
      'Current Quarter',
      'Next 5 Days',
      'Next 10 Days',
    ];

    const result = getSymbolicPeriodValues();

    expect(result).toEqual(expected);
  });
});

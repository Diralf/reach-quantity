import { toUtcDateTime } from '../date-time/date-time';
import { getTargetForDate } from './get-target-for-date';

describe('getTargetForDate', () => {
  it.each`
    current         | expectedTarget
    ${'2023-01-01'} | ${1}
    ${'2023-01-02'} | ${2}
    ${'2023-01-03'} | ${3}
    ${'2023-01-04'} | ${4}
  `('Should get target for specific date $currentDate', ({
    current,
    expectedTarget,
  }: { current: string, expectedTarget: number }) => {
    const targets = [1, 2, 3, 4, 5];
    const startDate = toUtcDateTime('2023-01-01');
    const currentDate = toUtcDateTime(current);

    const resultTarget = getTargetForDate(currentDate, targets, startDate);

    expect(resultTarget).toEqual(expectedTarget);
  });
});

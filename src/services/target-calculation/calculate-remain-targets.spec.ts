import { DateTime } from 'luxon';
import { toUtcDateTime } from '../date-time/date-time';
import { calculateRemainTargets } from './calculate-remain-targets';

const getRange = (...args: Array<{ count: number, fill: number }>) => args.map(({
  count,
  fill,
}) => new Array(count).fill(fill)).flat();

describe('calculateRemainTargets', () => {
  const caseForQuarter = getRange({
    count: 20,
    fill: 1,
  }, {
    count: 70,
    fill: 0,
  });

  describe.each`
    remainTarget | start           | end             | expected
    ${15}        | ${'2023-01-01'} | ${'2023-01-05'} | ${[3, 3, 3, 3, 3]}
    ${16}        | ${'2023-01-01'} | ${'2023-01-05'} | ${[4, 3, 3, 3, 3]}
    ${18}        | ${'2023-01-01'} | ${'2023-01-05'} | ${[4, 4, 4, 3, 3]}
    ${19}        | ${'2023-01-01'} | ${'2023-01-05'} | ${[4, 4, 4, 4, 3]}
    ${20}        | ${'2023-01-01'} | ${'2023-01-05'} | ${[4, 4, 4, 4, 4]}
    ${20}        | ${'2023-02-01'} | ${'2023-02-08'} | ${[3, 3, 3, 3, 2, 2, 2, 2]}
    ${20}        | ${'2023-01-01'} | ${'2023-03-31'} | ${caseForQuarter}
  `('should calculate targets when remains $remainTarget for dates $start - $end', ({
    remainTarget,
    start,
    end,
    expected,
  }: { remainTarget: number, start: string, end: string, expected: number[] }) => {
    const getDates = (startD: string, endD: string): [DateTime, DateTime] => [toUtcDateTime(startD), toUtcDateTime(endD)];

    it('Should have the same length of targets', () => {
      const targets = calculateRemainTargets(remainTarget, ...getDates(start, end));

      expect(targets.length).toEqual(expected.length);
    });

    it('Should have the same sum of calculated targets as remain target', () => {
      const targets = calculateRemainTargets(remainTarget, ...getDates(start, end));

      expect(targets.reduce((sum, element) => sum + element)).toEqual(remainTarget);
    });

    it('Should have expected calculated targets', () => {
      const targets = calculateRemainTargets(remainTarget, ...getDates(start, end));

      expect(targets).toEqual(expected);
    });
  });
});

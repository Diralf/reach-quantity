import { toUtcDateTime } from '../date-time/date-time';
import { getTodayTarget } from './get-today-target';

describe('getTodayTarget', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.each`
    currentDate     | expectedTarget | reached
    ${'2023-01-01'} | ${4}           | ${0}
    ${'2023-01-02'} | ${5}           | ${0}
    ${'2023-01-03'} | ${6}           | ${0}
    ${'2023-01-04'} | ${9}           | ${0}
    ${'2023-01-05'} | ${18}          | ${0}

    ${'2023-01-01'} | ${4}           | ${0}
    ${'2023-01-02'} | ${4}           | ${4}
    ${'2023-01-03'} | ${4}           | ${8}
    ${'2023-01-04'} | ${3}           | ${12}
    ${'2023-01-05'} | ${3}           | ${15}
  `('Should set today target $expectedTarget for $currentDate when reached $reached', ({
    currentDate,
    expectedTarget,
    reached,
  }: { currentDate: string, expectedTarget: number, reached: number }) => {
    jest.setSystemTime(new Date(currentDate));

    const todayTarget = getTodayTarget({
      periodEndDate: toUtcDateTime('2023-01-05'),
      targetOverall: 18,
      reachedOverall: reached,
    });

    expect(todayTarget).toEqual(expectedTarget);
  });
});

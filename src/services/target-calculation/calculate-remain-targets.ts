import { DateTime, Interval } from 'luxon';

const INCLUDES_START_DATE = 1;
const EXTRA_TARGET = 1;

const getCountOfDays = (startDate: DateTime, endDate: DateTime): number => {
  const interval = Interval.fromDateTimes(startDate, endDate);
  return Math.floor(interval.length('days') + INCLUDES_START_DATE);
};

const distributeTargets = (remainTarget: number, countDays: number): number[] => {
  const oneDayResult = Math.floor(remainTarget / countDays);
  const rest = remainTarget % countDays;

  return new Array(countDays).fill(oneDayResult)
    .map((item, index) => {
      if (index < rest) {
        return item + EXTRA_TARGET;
      }
      return item;
    });
};

export const calculateRemainTargets = (remainTarget: number, startDate: DateTime, endDate: DateTime): number[] => {
  const countDays = getCountOfDays(startDate, endDate);
  return distributeTargets(remainTarget, countDays);
};

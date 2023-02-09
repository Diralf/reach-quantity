import { SymbolicPeriod } from '../../constants/symbolic-period';
import { TargetDto } from '../../types/dto/target.dto';
import { TargetEntity } from '../../types/entities/target.entity';
import { DeepPartial } from '../../types/utils/deep-partial';
import { toUtcDateTime } from '../date-time/date-time';
import { convertTargetFromEntityToDto } from './convertTargetFromEntityToDto';

const generateEntity = (entity?: DeepPartial<TargetEntity>): TargetEntity => ({
  id: 1,
  name: 'test',
  quantity: 18,
  measurement: 'tests',
  period: SymbolicPeriod.Next5Days,
  createdOn: new Date('2023-01-01'),
  ...entity,
});

describe('convertTargetFromEntityToDto', () => {
  beforeEach(() => {
    jest.useFakeTimers()
      .setSystemTime(new Date('2023-01-01'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.each<[string, DeepPartial<TargetEntity>, DeepPartial<TargetDto>]>([
    ['id', { id: 1 }, { id: 1 }],
    ['name', { name: 'Test name' }, { name: 'Test name' }],
    ['quantity', { quantity: 10 }, { quantity: 10 }],
    ['quantity string', { quantity: '10' } as unknown as DeepPartial<TargetEntity>, { quantity: 10 }],
    ['measurement', { measurement: 'some tests' }, { measurement: 'some tests' }],
    [
      'createdOn',
      { createdOn: new Date('2023-02-03') },
      { createdOn: toUtcDateTime('2023-02-03') },
    ],
  ])('Should convert %p field from Entity to DTO', (testCase, entity, expected) => {
    const result = convertTargetFromEntityToDto(generateEntity(entity));

    expect(result)
      .toEqual(expect.objectContaining(expected));
  });

  describe('period and exact dates', () => {
    it.each<[string, DeepPartial<TargetEntity>, DeepPartial<TargetDto>]>([
      [
        'Next10Days',
        {
          period: SymbolicPeriod.Next10Days,
          createdOn: new Date('2023-02-01'),
        },
        {
          period: SymbolicPeriod.Next10Days,
          periodStartDate: toUtcDateTime('2023-02-01'),
          periodEndDate: toUtcDateTime('2023-02-10'),
        },
      ],
      [
        'CurrentQuarter',
        {
          period: SymbolicPeriod.CurrentQuarter,
          createdOn: new Date('2023-02-01'),
        },
        {
          period: SymbolicPeriod.CurrentQuarter,
          periodStartDate: toUtcDateTime('2023-01-01'),
          periodEndDate: toUtcDateTime('2023-03-31'),
        },
      ],
    ])('Should convert %p field from DTO to commonInfo', (testCase, entity, expected) => {
      const result = convertTargetFromEntityToDto(generateEntity(entity));

      expect(result)
        .toEqual(expect.objectContaining(expected));
    });
  });

  describe('today target', () => {
    it.each`
      currentDate     | expectedTarget | reached
      ${'2023-01-01'} | ${4}           | ${0}
      ${'2023-01-02'} | ${5}           | ${0}
      ${'2023-01-03'} | ${6}           | ${0}
      ${'2023-01-04'} | ${9}           | ${0}
      ${'2023-01-05'} | ${18}          | ${0}
    `('Should set today target $expectedTarget for $currentDate when reached $reached', ({
      currentDate,
      expectedTarget,
    }: { currentDate: string, expectedTarget: number }) => {
      jest.setSystemTime(new Date(currentDate));

      const result = convertTargetFromEntityToDto(generateEntity({
        period: SymbolicPeriod.Next5Days,
        createdOn: new Date('2023-01-01'),
        quantity: 18,
      }));

      expect(result.todayTarget)
        .toEqual(expectedTarget);
    });

    it.each([
      {
        createdOn: '2023-02-03',
        currentDate: '2023-02-03T12:23',
      },
      {
        createdOn: '2023-02-03T08:23',
        currentDate: '2023-02-03',
      },
      {
        createdOn: '2023-02-03T08:23',
        currentDate: '2023-02-03T12:23',
      },
    ])('Should set today right target when created on is $createdOn and current date is $currentDate', ({
      createdOn,
      currentDate,
    }) => {
      jest.setSystemTime(new Date(currentDate));

      const result = convertTargetFromEntityToDto(generateEntity({
        period: SymbolicPeriod.Next10Days,
        createdOn: new Date(createdOn),
        quantity: 50,
      }));

      expect(result.todayTarget)
        .toEqual(5);
    });
  });
});

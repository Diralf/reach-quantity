import { SymbolicPeriod } from '../../constants/symbolic-period';
import { TargetDto } from '../../types/models/targetDto';
import { DeepPartial } from '../../types/utils/deep-partial';
import { Target } from '../../types/view/target';
import { toUtcDateTime } from '../date-time/date-time';
import { convertTargetFromDto } from './convert-target';

const generateDto = (dto?: DeepPartial<TargetDto>): TargetDto => ({
  id: 1,
  name: 'test',
  quantity: 18,
  measurement: 'tests',
  period: SymbolicPeriod.Next5Days,
  createdOn: new Date('2023-01-01'),
  ...dto,
});

describe('convertTargetFromDto', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.each<[string, DeepPartial<TargetDto>, DeepPartial<Target>]>([
    ['id', { id: 1 }, { id: 1 }],
    ['name', { name: 'Test name' }, { name: 'Test name' }],
  ])('Should convert %p field from DTO to root', (testCase, dto, expected) => {
    const result = convertTargetFromDto(generateDto(dto));

    expect(result).toEqual(expect.objectContaining(expected));
  });

  it.each<[string, DeepPartial<TargetDto>, DeepPartial<Target>]>([
    ['quantity', { quantity: 10 }, { commonInfo: { quantity: 10 } }],
    ['measurement', { measurement: 'some tests' }, { commonInfo: { measurement: 'some tests' } }],
    [
      'createdOn',
      {
        createdOn: new Date('2023-02-03'),
      },
      {
        commonInfo: { createdOn: toUtcDateTime('2023-02-03') },
      },
    ],
  ])('Should convert %p field from DTO to commonInfo', (testCase, dto, expected) => {
    const result = convertTargetFromDto(generateDto(dto));

    expect(result.commonInfo).toEqual(expect.objectContaining(expected.commonInfo));
  });

  describe('period and exact dates', () => {
    it.each<[string, string, DeepPartial<TargetDto>, DeepPartial<Target>]>([
      [
        'Next10Days',
        '2023-02-01',
        { period: SymbolicPeriod.Next10Days },
        {
          commonInfo: {
            period: SymbolicPeriod.Next10Days,
            startDate: toUtcDateTime('2023-02-01'),
            endDate: toUtcDateTime('2023-02-10'),
          },
        },
      ],
      [
        'CurrentQuarter',
        '2023-02-01',
        { period: SymbolicPeriod.CurrentQuarter },
        {
          commonInfo: {
            period: SymbolicPeriod.CurrentQuarter,
            startDate: toUtcDateTime('2023-01-01'),
            endDate: toUtcDateTime('2023-03-31'),
          },
        },
      ],
    ])('Should convert %p field from DTO to commonInfo', (testCase, currentDate, dto, expected) => {
      jest.setSystemTime(new Date(currentDate));

      const result = convertTargetFromDto(generateDto(dto));

      expect(result.commonInfo).toEqual(expect.objectContaining(expected.commonInfo));
    });
  });
});

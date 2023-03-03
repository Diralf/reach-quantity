import { CreateTargetParamsDto, CreateTargetParams } from '@reach-quantity/types';
import { SymbolicPeriod } from '../../constants/symbolic-period';
import { convertCreateTargetParamsDtoToEntity } from './convertCreateTargetParamsDtoToEntity';

const generateDto = (dto?: Partial<CreateTargetParamsDto>): CreateTargetParamsDto => ({
  name: 'test',
  quantity: 50,
  measurement: 'tests',
  period: SymbolicPeriod.CurrentQuarter,
  ...dto,
});

describe('convertCreateTargetParamsDtoToEntity', () => {
  it.each<[string, Partial<CreateTargetParamsDto>, Partial<CreateTargetParams>]>([
    ['name', { name: 'Test name' }, { name: 'Test name' }],
    ['quantity', { quantity: 50 }, { quantity: 50 }],
    ['quantity string', { quantity: '50' as unknown as number }, { quantity: 50 }],
    ['measurement', { measurement: 'times' }, { measurement: 'times' }],
    ['period', { period: SymbolicPeriod.Next5Days }, { period: SymbolicPeriod.Next5Days }],
  ])('Should convert correctly %p', (testCase, dto, expectedEntity) => {
    const entity = convertCreateTargetParamsDtoToEntity(generateDto(dto));

    expect(entity)
      .toEqual(expect.objectContaining(expectedEntity));
  });

  it('should set create on', () => {
    const currentDate = new Date('2023-01-01');
    jest.useFakeTimers()
      .setSystemTime(currentDate);

    const entity = convertCreateTargetParamsDtoToEntity(generateDto());

    expect(entity)
      .toEqual(expect.objectContaining({ createdOn: currentDate }));

    jest.useRealTimers();
  });
});

import { SymbolicPeriod } from '../../constants/symbolic-period';
import { CreateTargetParamsEntity } from '../../types/entities/create-target-params.entity';
import { CreateTargetParamsDto } from '../../types/models/create-target-params.dto';
import { convertCreateTargetParamsDtoToEntity } from './convertCreateTargetParamsDtoToEntity';

const generateDto = (dto?: Partial<CreateTargetParamsDto>): CreateTargetParamsDto => ({
  name: 'test',
  quantity: 50,
  measurement: 'tests',
  period: SymbolicPeriod.CurrentQuarter,
  ...dto,
});

describe('convertCreateTargetParamsDtoToEntity', () => {
  it.each<[string, Partial<CreateTargetParamsDto>, Partial<CreateTargetParamsEntity>]>([
    ['name', { name: 'Test name' }, { name: 'Test name' }],
    ['quantity', { quantity: 50 }, { quantity: 50 }],
    ['quantity string', { quantity: '50' as unknown as number }, { quantity: 50 }],
    ['measurement', { measurement: 'times' }, { measurement: 'times' }],
    ['period', { period: SymbolicPeriod.Next5Days }, { period: SymbolicPeriod.Next5Days }],
  ])('Should convert correctly %p', (testCase, dto, expectedEntity) => {
    const entity = convertCreateTargetParamsDtoToEntity(generateDto(dto));

    expect(entity).toEqual(expect.objectContaining(expectedEntity));
  });

  it('should set create on', () => {
    const currentDate = new Date('2023-01-01');
    jest.useFakeTimers().setSystemTime(currentDate);

    const entity = convertCreateTargetParamsDtoToEntity(generateDto());

    expect(entity).toEqual(expect.objectContaining({ createdOn: currentDate }));

    jest.useRealTimers();
  });
});

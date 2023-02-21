import { CreateTargetParams } from '@reach-quantity/types';
import { SymbolicPeriod } from '../../../../constants/symbolic-period';

export const mockCreateTargetParams: CreateTargetParams = {
  name: 'test name',
  quantity: 5,
  measurement: 'tests',
  period: SymbolicPeriod.CurrentQuarter,
  createdOn: new Date('2023-01-01'),
};

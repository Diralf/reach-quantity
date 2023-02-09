import { SymbolicPeriod } from '../../../../constants/symbolic-period';
import { DbTargets } from '../../types/db.targets';

export const mockTarget: DbTargets = {
  name: 'test name',
  quantity: 5,
  measurement: 'tests',
  period: SymbolicPeriod.CurrentQuarter,
  createdOn: new Date('2023-01-01'),
};

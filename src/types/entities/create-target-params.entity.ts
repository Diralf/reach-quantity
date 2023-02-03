import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface CreateTargetParamsEntity {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  createdOn: Date;
}

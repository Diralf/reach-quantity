import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface TargetEntity {
  id: number;
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  createdOn: Date;
}

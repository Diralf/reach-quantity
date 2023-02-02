import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface TargetDto {
  id: number;
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  createdOn: Date;
}

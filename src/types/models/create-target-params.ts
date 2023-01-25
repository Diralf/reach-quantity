import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface CreateTargetParams {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
}

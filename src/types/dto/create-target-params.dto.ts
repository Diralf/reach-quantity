import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface CreateTargetParamsDto {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
}

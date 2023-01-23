import { SymbolicRange } from '../../constants/symbolic-range';

export interface CreateTargetParams {
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicRange;
}

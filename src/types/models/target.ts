import { SymbolicRange } from '../../constants/symbolic-range';

export interface Target {
  id: number;
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicRange;
  createdOn: Date;
}

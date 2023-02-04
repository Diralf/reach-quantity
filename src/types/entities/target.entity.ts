import { SymbolicPeriod } from '../../constants/symbolic-period';
import { ReachedEntity } from './reached.entity';

export interface TargetEntity {
  id: number;
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  createdOn: Date;
  reachedQuantities: ReachedEntity[];
}

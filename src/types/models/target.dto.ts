import { DateTime } from 'luxon';
import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface TargetDto {
  id: number;
  name: string;
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  periodStartDate: DateTime;
  periodEndDate: DateTime;
  createdOn: DateTime;
  todayTarget: number;
}

import { DateTime } from 'luxon';
import { SymbolicPeriod } from '../../constants/symbolic-period';

export interface Target {
  id: number;
  name: string;
  commonInfo: TargetCommonInfo;
  todayTarget: number;
}

export interface TargetCommonInfo {
  quantity: number;
  measurement: string;
  period: SymbolicPeriod;
  startDate: DateTime;
  endDate: DateTime;
  createdOn: DateTime;
}

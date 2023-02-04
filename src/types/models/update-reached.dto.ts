import { DateTime } from 'luxon';

export interface UpdateReachedDto {
  targetId: number;
  quantity: number;
  date: DateTime;
}

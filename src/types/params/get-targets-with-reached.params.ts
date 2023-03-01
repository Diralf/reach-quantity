import { TargetEntity, ReachedEntity } from '../entities';

export interface GetTargetsWithReachedParams {
  startDate: Date;
  endDate: Date;
}

export interface GetTargetsWithReachedQuery extends TargetEntity {
  reachedQuantities: ReachedEntity[];
}

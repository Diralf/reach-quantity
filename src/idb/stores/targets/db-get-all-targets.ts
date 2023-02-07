import { TargetEntity } from '../../../types/entities/target.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbGetAllTargets = async (): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction('TARGETS');
  const allTargets = await transaction.store.getAll();

  await transaction.done;

  return allTargets as TargetEntity[];
};

import { TargetEntity } from '../../../types/entities/target.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbGetAllTargets = async (): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction(['TARGETS', 'REACHED']);
  const targets = transaction.objectStore('TARGETS');
  const allTargets = await targets.getAll();
  return allTargets as TargetEntity[];
};

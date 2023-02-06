import { TargetEntity } from '../../../types/entities/target.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbGetAllTargets = async (): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction(['TARGETS', 'REACHED']);
  const targets = transaction.objectStore('TARGETS');
  const allTargets = await targets.getAll();
  // const reached = transaction.objectStore('REACHED');
  //
  // let reachedCursor = await reached.index('REACHED__TARGET_ID').openCursor();
  // while (reachedCursor) {
  //   console.log(reachedCursor.key, reachedCursor.value);
  //   reachedCursor = await reachedCursor.continue();
  // }
  return allTargets as TargetEntity[];
};

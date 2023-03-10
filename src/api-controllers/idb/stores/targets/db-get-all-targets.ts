import { TargetEntity } from '@reach-quantity/types';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbGetAllTargets = async (): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const tx = db.transaction('TARGETS');
  const allTargets = await tx.store.getAll();

  await tx.done;

  return allTargets;
};

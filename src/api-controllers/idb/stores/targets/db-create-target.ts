import { TargetEntity, CreateTargetParams } from '@reach-quantity/types';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbCreateTarget = async (body: CreateTargetParams): Promise<number> => {
  const db = await openReachQuantityDb();

  const tx = db.transaction('TARGETS', 'readwrite');
  const resultKey = await tx.store.add(body as TargetEntity);

  await tx.done;

  return resultKey;
};

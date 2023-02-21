import { TargetEntity, CreateTargetParams } from '@reach-quantity/types';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbCreateTarget = async (body: CreateTargetParams): Promise<TargetEntity> => {
  const db = await openReachQuantityDb();

  const tx = db.transaction('TARGETS', 'readwrite');
  const resultKey = await tx.store.add(body);
  const result = await tx.store.get(resultKey);

  await tx.done;

  if (!result) {
    throw new Error('Target wasn\'t added to the store');
  }

  return result;
};

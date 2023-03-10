import { UpdateReachedParams, ReachedEntity } from '@reach-quantity/types';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbUpdateReached = async (body: UpdateReachedParams): Promise<void> => {
  const db = await openReachQuantityDb();
  const tx = db.transaction('REACHED', 'readwrite');
  const index = tx.store.index('REACHED__TARGET_ID__DATE');

  const reachedItem = await index.get([body.targetId, body.date]);
  const updatedItem = {
    ...reachedItem ?? {},
    ...body,
  };

  await tx.store.put(updatedItem as ReachedEntity);

  return tx.done;
};

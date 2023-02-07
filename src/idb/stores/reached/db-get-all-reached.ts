import { IDBKeyRange } from 'fake-indexeddb';
import { GetReachedParamsEntity } from '../../../types/entities/get-reached-params.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbReached } from '../../types/db.reached';

export const dbGetReached = async ({ startDate, endDate, targetIds }: GetReachedParamsEntity) => {
  const db = await openReachQuantityDb();

  const transaction = db.transaction('REACHED');
  const index = transaction.store.index('REACHED__DATE');

  const result = new Map<number, DbReached[]>();

  for await (const cursor of index.iterate(IDBKeyRange.bound(startDate, endDate))) {
    const reachedItem = cursor.value;
    const { targetId } = reachedItem;
    if (targetIds.includes(targetId)) {
      const reachedForTarget = result.get(reachedItem.targetId) ?? [];
      reachedForTarget.push(reachedItem);
      result.set(reachedItem.targetId, reachedForTarget);
    }
  }

  await transaction.done;

  return Array.from(result);
};

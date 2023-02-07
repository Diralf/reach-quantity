import { UpdateReachedEntity } from '../../../types/entities/update-reached.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbUpdateReached = async (body: UpdateReachedEntity): Promise<void> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction('REACHED', 'readwrite');
  const index = transaction.store.index('REACHED__TARGET_ID__DATE');

  const reachedItem = await index.get([body.targetId, body.date]);
  const updatedItem = {
    ...reachedItem ?? {},
    ...body,
  };

  await transaction.store.put(updatedItem);

  return transaction.done;
};

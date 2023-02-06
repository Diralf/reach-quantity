import { UpdateReachedEntity } from '../../../types/entities/update-reached.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbUpdateReached = async (body: UpdateReachedEntity): Promise<void> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction('REACHED', 'readwrite');
  const reached = transaction.objectStore('REACHED');

  const resultKey = await reached.add(body);

  const result = await reached.get(resultKey);
  console.log({ result });

  return transaction.done;
};

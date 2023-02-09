import { IDBKeyRange } from 'fake-indexeddb';
import { IDBPIndex } from 'idb';
import { ReachedEntity } from '../../../../types/entities/reached.entity';
import { GetReachedParams } from '../../../../types/params/get-reached.params';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbReached } from '../../types/db.reached';
import { DbSchema, DbStoreNames } from '../../types/db.schema';

function addReachedToTargetGroup(reachedItem: DbReached, targetIds: number[], reachedByTargets: Map<number, DbReached[]>): void {
  const { targetId } = reachedItem;
  if (targetIds.includes(targetId)) {
    const reachedByTarget = reachedByTargets.get(reachedItem.targetId) ?? [];
    reachedByTargets.set(reachedItem.targetId, [...reachedByTarget, reachedItem]);
  }
}

interface FetchProps {
  index: IDBPIndex<DbSchema, DbStoreNames[], 'REACHED', 'REACHED__DATE'>;
  startDate: Date;
  endDate: Date;
  targetIds: number[];
}

export async function fetchReachedGroupedByTargets({
  index,
  startDate,
  endDate,
  targetIds,
}: FetchProps): Promise<Array<[number, ReachedEntity[]]>> {
  const reachedByTargets = new Map<number, ReachedEntity[]>();

  for await (const cursor of index.iterate(IDBKeyRange.bound(startDate, endDate))) {
    const reachedItem = cursor.value;
    addReachedToTargetGroup(reachedItem, targetIds, reachedByTargets);
  }
  return Array.from(reachedByTargets);
}

export const dbGetReached = async ({
  startDate,
  endDate,
  targetIds,
}: GetReachedParams): Promise<Array<[number, ReachedEntity[]]>> => {
  const db = await openReachQuantityDb();

  const tx = db.transaction('REACHED');
  const index = tx.store.index('REACHED__DATE');

  const reachedByTargets = await fetchReachedGroupedByTargets({
    index,
    startDate,
    endDate,
    targetIds,
  });

  await tx.done;

  return reachedByTargets;
};
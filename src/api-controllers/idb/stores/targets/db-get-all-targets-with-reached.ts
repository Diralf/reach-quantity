import { GetTargetsWithReachedEntity } from '../../../../types/entities/get-targets-with-reached.entity';
import { TargetEntity } from '../../../../types/entities/target.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { fetchReachedGroupedByTargets } from '../reached/db-get-all-reached';

export const dbGetAllTargetsWithReached = async ({
  startDate,
  endDate,
}: GetTargetsWithReachedEntity): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const tx = db.transaction(['TARGETS', 'REACHED']);
  const allTargets = await tx.objectStore('TARGETS')
    .getAll();
  const reachedDateIndex = tx.objectStore('REACHED')
    .index('REACHED__DATE');
  const reachedByTargets = await fetchReachedGroupedByTargets({
    index: reachedDateIndex,
    startDate,
    endDate,
    targetIds: allTargets.map((target) => target.id) as number[],
  });

  await tx.done;

  const reachedByTargetMap = new Map(reachedByTargets);

  return (allTargets as TargetEntity[]).map((target: TargetEntity) => ({
    ...target,
    reachedQuantities: reachedByTargetMap.get(target.id) ?? [],
  } as TargetEntity));
};

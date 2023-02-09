import { CreateTargetParamsEntity } from '../../../../types/entities/create-target-params.entity';
import { TargetEntity } from '../../../../types/entities/target.entity';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';

export const dbCreateTarget = async (body: CreateTargetParamsEntity): Promise<TargetEntity>
{
  const db = await openReachQuantityDb(

  const tx = db.transaction('TARGETS', 'readwrit  );
  const resultKey = await tx.store.add(bo);
  const result = await tx.store.get(resultKey

  await tx.don;

  if (!resul {
    throw new Error('Target wasn\'t added to the stor  );
  }


  return result as TargetEntity;
}


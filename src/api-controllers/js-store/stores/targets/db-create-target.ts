import { TargetEntity, CreateTargetParams } from '@reach-quantity/types';
import { Connection } from 'jsstore';
import { targetsTable } from '../../db/tables/targets.table';

export const dbCreateTarget = async (connection: Connection, body: CreateTargetParams): Promise<TargetEntity> => {
  const targets: TargetEntity[] = await connection.insert({
    into: targetsTable.name,
    values: [body],
    return: true,
  }) as TargetEntity[];

  const [result] = targets;

  if (!result) {
    throw new Error('Target wasn\'t added to the store');
  }

  return result;
};

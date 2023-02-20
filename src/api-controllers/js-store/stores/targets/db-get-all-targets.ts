import { TargetEntity } from '@reach-quantity/types';
import { Connection } from 'jsstore';
import { targetsTable } from '../../db/tables/targets.table';

export const dbGetAllTargets = async (connection: Connection): Promise<TargetEntity[]> => connection.select({
  from: targetsTable.name,
});

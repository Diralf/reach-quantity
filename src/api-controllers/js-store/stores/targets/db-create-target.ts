import { TargetEntity, CreateTargetParams } from '@reach-quantity/types';
import { Connection } from 'jsstore';
import { targetsTable } from '../../db/tables/targets.table';

// async function insertTarget(ctx: any) {
//   ctx.start();
//
//   const insertedTargets = await ctx.insert({
//     into: targetsTable.name,
//     values: ctx.data.targets,
//     return: true,
//   });
//
//   ctx.setResult('insertedTargets', insertedTargets);
// }
//
// // @ts-ignore
// window.insertTarget = insertTarget;

export const dbCreateTarget = async (connection: Connection, body: CreateTargetParams | CreateTargetParams[]): Promise<TargetEntity> => {
  // const txResult = await connection.transaction({
  //   tables: [targetsTable.name],
  //   method: 'insertTarget',
  //   data: {
  //     targets: Array.isArray(body) ? body : [body],
  //   },
  // });

  try {
    const targets: TargetEntity[] = await connection.insert({
      into: targetsTable.name,
      values: Array.isArray(body) ? body : [body],
      return: true,
    }) as TargetEntity[];

    const [result] = targets;
    // const [result] = txResult.insertedTargets;

    if (!result) {
      throw new Error('Target wasn\'t added to the store');
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

import { initDbUtils } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';
import { dbGetAllTargets } from './db-get-all-targets';

const { restoreTestDB } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbGetAllTargets', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should get all targets', async () => {
    const target = mockTarget;

    await dbCreateTarget(target);
    await dbCreateTarget(target);
    await dbCreateTarget(target);
    const allTargets = await dbGetAllTargets();

    expect(allTargets).toEqual([
      { ...target, id: 1 },
      { ...target, id: 2 },
      { ...target, id: 3 },
    ]);
  });
});

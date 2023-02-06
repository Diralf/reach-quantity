import { initDbUtils } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';

const { restoreTestDB, getAll } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbCreateTarget', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should create target', async () => {
    const target = mockTarget;

    await dbCreateTarget(target);
    await dbCreateTarget(target);
    const allTargets = await getAll('TARGETS');

    expect(allTargets).toEqual([
      { ...target, id: 1 },
      { ...target, id: 2 },
    ]);
  });
});

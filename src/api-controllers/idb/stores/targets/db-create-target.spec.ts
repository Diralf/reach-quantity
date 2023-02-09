import { initDbUtils, withIds } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';

const { restoreTestDB, testGetAll, testBulkAction } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbCreateTarget', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should create target', async () => {
    const target = mockTarget;

    await testBulkAction([target, target], dbCreateTarget);
    const allTargets = await testGetAll('TARGETS');

    expect(allTargets).toEqual(withIds([target, target]));
  });
});

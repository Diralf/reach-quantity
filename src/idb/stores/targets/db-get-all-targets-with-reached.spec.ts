import { initDbUtils, withIds } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';
import { dbGetAllTargetsWithReached } from './db-get-all-targets-with-reached';

const { restoreTestDB, testBulkAction } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbGetAllTargetsWithReached', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should get all targets', async () => {
    const target = mockTarget;

    await testBulkAction([target, target, target], dbCreateTarget);
    const allTargets = await dbGetAllTargetsWithReached();

    expect(allTargets).toEqual(withIds([target, target, target]));
  });
});

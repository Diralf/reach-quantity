import { initDbUtils, withIds } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockCreateTargetParams } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';
import { dbGetAllTargets } from './db-get-all-targets';

const { restoreTestDB, testBulkAction } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbGetAllTargets', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should get all targets', async () => {
    const target = mockCreateTargetParams;

    await testBulkAction([target, target, target], dbCreateTarget);
    const allTargets = await dbGetAllTargets();

    expect(allTargets).toEqual(withIds([target, target, target]));
  });
});

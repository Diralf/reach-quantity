import { SymbolicPeriod } from '../../../constants/symbolic-period';
import { initDbUtils } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { dbCreateTarget } from './db-create-target';
import { dbGetAllTargets } from './db-get-all-targets';

const { restoreTestDB } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbGetAllTargets', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should get all targets', async () => {
    const target = {
      name: 'test name',
      quantity: 5,
      measurement: 'tests',
      period: SymbolicPeriod.CurrentQuarter,
      createdOn: new Date('2023-01-01'),
    };

    await dbCreateTarget(target);
    await dbCreateTarget(target);
    await dbCreateTarget(target);
    const allTargets = await dbGetAllTargets();

    expect(allTargets).toEqual([
      {
        ...target,
        id: 1,
      },
      {
        ...target,
        id: 2,
      },
      {
        ...target,
        id: 3,
      },
    ]);
  });
});

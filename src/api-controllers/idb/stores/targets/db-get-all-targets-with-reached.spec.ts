import { TargetEntity } from '../../../../types/entities/target.entity';
import { initDbUtils, withIds } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockReached } from '../__test-data__/reached';
import { mockTarget } from '../__test-data__/target';
import { dbUpdateReached } from '../reached/db-update-reached';
import { dbCreateTarget } from './db-create-target';
import { dbGetAllTargetsWithReached } from './db-get-all-targets-with-reached';

const {
  restoreTestDB,
  testBulkAction,
  testGetAll,
} = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbGetAllTargetsWithReached', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should get all targets', async () => {
    const target = mockTarget;
    const reachedList = [
      {
        ...mockReached,
        date: new Date('2023-01-01'),
        targetId: 1,
      },
      {
        ...mockReached,
        date: new Date('2023-01-02'),
        targetId: 1,
      },
      {
        ...mockReached,
        date: new Date('2023-01-02'),
        targetId: 2,
      },
      {
        ...mockReached,
        date: new Date('2023-01-03'),
        targetId: 2,
      },
    ];
    const reachedListWithId = withIds(reachedList);
    const targetEntities: TargetEntity[] = withIds([
      {
        ...target,
        reachedQuantities: [reachedListWithId[0], reachedListWithId[1]],
      },
      {
        ...target,
        reachedQuantities: [reachedListWithId[2], reachedListWithId[3]],
      },
      {
        ...target,
        reachedQuantities: [],
      },
    ]);

    await testBulkAction([target, target, target], dbCreateTarget);
    await testBulkAction(reachedList, dbUpdateReached);
    const allTargets = await dbGetAllTargetsWithReached({
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-01-05'),
    });
    const allReached = await testGetAll('REACHED');

    expect(allReached)
      .toEqual(withIds(reachedList));
    expect(allTargets)
      .toEqual(targetEntities);
  });
});

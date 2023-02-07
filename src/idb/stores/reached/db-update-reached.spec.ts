import { UpdateReachedEntity } from '../../../types/entities/update-reached.entity';
import { initDbUtils, withIds } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockReached, mockReachedList } from '../__test-data__/reached';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from '../targets/db-create-target';
import { dbUpdateReached } from './db-update-reached';

const {
  restoreTestDB,
  testGetAll,
  testAdd,
  testBulkAction,
} = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbUpdateReached', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should add reached for target', async () => {
    const target = mockTarget;
    const reachedBody: UpdateReachedEntity = mockReached;

    await dbCreateTarget(target);
    await dbUpdateReached(reachedBody);
    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }]);
    expect(allReached).toEqual([{ ...reachedBody, id: 1 }]);
  });

  it('Should update existing reached for target', async () => {
    const target = mockTarget;
    const reachedInitial: UpdateReachedEntity[] = mockReachedList;
    const reachedUpdate: UpdateReachedEntity = {
      ...mockReached, quantity: 3, date: new Date('2023-01-01'), targetId: 1,
    };

    await dbCreateTarget(target);
    await dbCreateTarget(target);
    await testBulkAction(reachedInitial, dbUpdateReached);
    const allTargetsInitial = await testGetAll('TARGETS');
    const allReachedInitial = await testGetAll('REACHED');

    expect(allTargetsInitial).toEqual([{ ...target, id: 1 }, { ...target, id: 2 }]);
    expect(allReachedInitial).toEqual(reachedInitial.map((reached, index) => ({ ...reached, id: index + 1 })));

    await dbUpdateReached(reachedUpdate);
    const allTargetsAfterUpdate = await testGetAll('TARGETS');
    const allReachedAfterUpdate = await testGetAll('REACHED');

    expect(allTargetsAfterUpdate).toEqual(withIds([target, target]));
    expect(allReachedAfterUpdate).toEqual(withIds([reachedUpdate, ...reachedInitial.slice(1)]));
  });

  it('Should not add same reached twice', async () => {
    const target = mockTarget;
    const reachedBody: UpdateReachedEntity = mockReached;

    await dbCreateTarget(target);
    await dbUpdateReached(reachedBody);
    await dbUpdateReached(reachedBody);
    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual(withIds([target]));
    expect(allReached).toEqual(withIds([reachedBody]));
  });

  it('Should handle manually added the same reached, update only first but ignore the second', async () => {
    const target = mockTarget;
    const reachedAddedManually: UpdateReachedEntity = { ...mockReached, quantity: 1 };
    const reachedAddedByApi: UpdateReachedEntity = { ...mockReached, quantity: 3 };

    await dbCreateTarget(target);
    await testAdd('REACHED', reachedAddedManually);
    await testAdd('REACHED', reachedAddedManually);
    await dbUpdateReached(reachedAddedByApi);
    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual(withIds([target]));
    expect(allReached).toEqual(withIds([reachedAddedByApi, reachedAddedManually]));
  });
});

import { UpdateReachedEntity } from '../../../types/entities/update-reached.entity';
import { initDbUtils } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockReached } from '../__test-data__/reached';
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
    const reachedInitial: UpdateReachedEntity[] = [
      {
        ...mockReached, quantity: 1, date: new Date('2023-01-01'), targetId: 1,
      },
      {
        ...mockReached, quantity: 1, date: new Date('2023-01-02'), targetId: 1,
      },
      {
        ...mockReached, quantity: 1, date: new Date('2023-01-01'), targetId: 2,
      },
    ];
    const reached2: UpdateReachedEntity = {
      ...mockReached, quantity: 3, date: new Date('2023-01-01'), targetId: 1,
    };

    await dbCreateTarget(target);
    await dbCreateTarget(target);
    await testBulkAction(reachedInitial, dbUpdateReached);
    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }, { ...target, id: 2 }]);
    expect(allReached).toEqual(reachedInitial.map((reached, index) => ({ ...reached, id: index + 1 })));

    await dbUpdateReached(reached2);
    const allTargets2 = await testGetAll('TARGETS');
    const allReached2 = await testGetAll('REACHED');

    expect(allTargets2).toEqual([{ ...target, id: 1 }, { ...target, id: 2 }]);
    expect(allReached2).toEqual([
      { ...reached2, id: 1 },
      {
        ...mockReached, id: 2, quantity: 1, date: new Date('2023-01-02'), targetId: 1,
      },
      {
        ...mockReached, id: 3, quantity: 1, date: new Date('2023-01-01'), targetId: 2,
      },
    ]);
  });

  it('Should not add same reached twice', async () => {
    const target = mockTarget;
    const reachedBody: UpdateReachedEntity = mockReached;

    await dbCreateTarget(target);
    await dbUpdateReached(reachedBody);
    await dbUpdateReached(reachedBody);
    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }]);
    expect(allReached).toEqual([{ ...reachedBody, id: 1 }]);
  });

  it('Should handle manually added the same reached, update only first but ignore the second', async () => {
    const target = mockTarget;
    const reachedBody: UpdateReachedEntity = { ...mockReached, quantity: 1 };

    await dbCreateTarget(target);
    await testAdd('REACHED', reachedBody);
    await testAdd('REACHED', reachedBody);
    await dbUpdateReached({ ...reachedBody, quantity: 3 });
    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }]);
    expect(allReached).toEqual([
      {
        ...reachedBody, id: 1, quantity: 3,
      },
      // ignore the second one
      {
        ...reachedBody, id: 2, quantity: 1,
      },
    ]);
  });
});

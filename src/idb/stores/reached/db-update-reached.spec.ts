import { UpdateReachedEntity } from '../../../types/entities/update-reached.entity';
import { initDbUtils } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockReached } from '../__test-data__/reached';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from '../targets/db-create-target';
import { dbUpdateReached } from './db-update-reached';

const { restoreTestDB, getAll } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('dbUpdateReached', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should add reached for target', async () => {
    const target = mockTarget;
    const reachedBody: UpdateReachedEntity = mockReached;

    await dbCreateTarget(target);
    await dbUpdateReached(reachedBody);
    const allTargets = await getAll('TARGETS');
    const allReached = await getAll('REACHED');

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
    const updates = reachedInitial.map((reached) => dbUpdateReached(reached));
    await Promise.all(updates);
    const allTargets = await getAll('TARGETS');
    const allReached = await getAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }, { ...target, id: 2 }]);
    expect(allReached).toEqual(reachedInitial.map((reached, index) => ({ ...reached, id: index + 1 })));

    await dbUpdateReached(reached2);
    const allTargets2 = await getAll('TARGETS');
    const allReached2 = await getAll('REACHED');

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
    const allTargets = await getAll('TARGETS');
    const allReached = await getAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }]);
    expect(allReached).toEqual([{ ...reachedBody, id: 1 }]);
  });

  // it('Should handle manually added the same reached', async () => {
  //   const target = mockTarget;
  //   const reachedBody: UpdateReachedEntity = mockReached;
  //
  //   await dbCreateTarget(target);
  //   await dbUpdateReached(reachedBody);
  //   await dbUpdateReached(reachedBody);
  //   const allTargets = await getAll('TARGETS');
  //   const allReached = await getAll('REACHED');
  //
  //   expect(allTargets).toEqual([{ ...target, id: 1 }]);
  //   expect(allReached).toEqual([{ ...reachedBody, id: 1 }]);
  // });
});

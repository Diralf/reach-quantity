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
    const reached1: UpdateReachedEntity = { ...mockReached, quantity: 1 };
    const reached2: UpdateReachedEntity = { ...mockReached, quantity: 3 };

    await dbCreateTarget(target);
    await dbUpdateReached(reached1);
    const allTargets = await getAll('TARGETS');
    const allReached = await getAll('REACHED');

    expect(allTargets).toEqual([{ ...target, id: 1 }]);
    expect(allReached).toEqual([{ ...reached1, id: 1 }]);

    await dbUpdateReached(reached2);
    const allTargets2 = await getAll('TARGETS');
    const allReached2 = await getAll('REACHED');

    expect(allTargets2).toEqual([{ ...target, id: 1 }]);
    expect(allReached2).toEqual([{ ...reached2, id: 1 }]);
  });
});

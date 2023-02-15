import { initDbUtils, withIds } from '../../db.test-utils';
import { targetsTable } from '../../db/tables/targets.table';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';

const {
  openConnection,
  restoreTestDB,
  testGetAll,
} = initDbUtils();

describe('dbCreateTarget', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should create target', async () => {
    const connection = await openConnection();
    const target = mockTarget;

    await dbCreateTarget(connection, target);
    const allTargets = await testGetAll(targetsTable.name);

    expect(allTargets).toEqual(withIds([target]));
  });

  it('Should create two targets', async () => {
    const connection = await openConnection();
    const target = mockTarget;

    await dbCreateTarget(connection, target);
    const firstTargets = await testGetAll(targetsTable.name);
    expect(firstTargets).toEqual(withIds([target]));

    await dbCreateTarget(connection, target);
    const allTargets = await testGetAll(targetsTable.name);

    expect(allTargets).toEqual(withIds([target, target]));
  });
});

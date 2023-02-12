import { initDbUtils, withIds } from '../../db.test-utils';
import { targetsTable } from '../../db/tables/targets.table';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';

const {
  openConnection,
  restoreTestDB,
} = initDbUtils();

describe('dbCreateTarget', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should create target', async () => {
    const connection = await openConnection();
    const target = mockTarget;

    await dbCreateTarget(connection, target);
    const allTargets = await connection.get(targetsTable.name);

    expect(allTargets)
      .toEqual(withIds([target, target]));
  });

  it('Should create two targets', async () => {
    const target = mockTarget;

    await testBulkAction([target, target], dbCreateTarget);
    const allTargets = await testGetAll('TARGETS');

    expect(allTargets)
      .toEqual(withIds([target, target]));
  });
});

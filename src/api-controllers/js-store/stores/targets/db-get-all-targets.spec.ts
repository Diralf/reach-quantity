import { initDbUtils, withIds } from '../../db.test-utils';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from './db-create-target';
import { dbGetAllTargets } from './db-get-all-targets';

const {
  openConnection,
  restoreTestDB,
} = initDbUtils();

describe('dbGetAllTargets', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('Should get one targets', async () => {
    const connection = await openConnection();
    const target = mockTarget;

    await dbCreateTarget(connection, target);
    const allTargets = await dbGetAllTargets(connection);

    expect(allTargets).toEqual(withIds([target]));
  });

  it('Should get all targets', async () => {
    const connection = await openConnection();
    const target = mockTarget;

    await dbCreateTarget(connection, [target, target, target]);
    const allTargets = await dbGetAllTargets(connection);

    expect(allTargets).toEqual(withIds([target, target, target]));
  });
});

import { initDbUtils } from '../../db.test-utils';
import { DbVersions, DB_NAME } from '../../db/db.constants';
import { openReachQuantityDb } from '../../db/open-reach-quantity-db';
import { DbReached } from '../../types/db.reached';
import { DbSchema, DbStoreNames } from '../../types/db.schema';
import { mockReached } from '../__test-data__/reached';
import { mockTarget } from '../__test-data__/target';
import { dbCreateTarget } from '../targets/db-create-target';
import { dbGetReached } from './db-get-all-reached';
import { dbUpdateReached } from './db-update-reached';

const { restoreTestDB, testGetAll, testBulkAction } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

const reachedInitial = [
  {
    ...mockReached, date: new Date('2023-01-01'), targetId: 1,
  },
  {
    ...mockReached, date: new Date('2023-01-02'), targetId: 1,
  },
  {
    ...mockReached, date: new Date('2023-01-02'), targetId: 2,
  },
  {
    ...mockReached, date: new Date('2023-01-03'), targetId: 2,
  },
];

describe('dbGetReached', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it.each<{ startDate: string, endDate: string, targetIds: number[], expected: Array<[number, DbReached[]]> }>([
    {
      startDate: '2023-01-01',
      endDate: '2023-01-03',
      targetIds: [1, 2],
      expected: [[1, [reachedInitial[0], reachedInitial[1]]], [2, [reachedInitial[2], reachedInitial[3]]]],
    },
  ])('Should get reached for range $startDate - $endDate and target $targetId', async ({ startDate, endDate, targetIds, expected }) => {
    const target = mockTarget;

    await testBulkAction([target, target], dbCreateTarget);
    await testBulkAction(reachedInitial, dbUpdateReached);

    const allTargets = await testGetAll('TARGETS');
    const allReached = await testGetAll('REACHED');

    expect(allTargets).toEqual([
      { ...target, id: 1 },
      { ...target, id: 2 },
    ]);
    expect(allReached).toEqual(reachedInitial.map((reached, index) => ({ ...reached, id: index + 1 })));

    const allReachedGrouped = await dbGetReached({
      startDate: new Date(startDate), endDate: new Date(endDate), targetIds,
    });

    const expectedReached = expected.map(([targId, reachedItems]) => [
      targId,
      reachedItems.map((reachedItem) => expect.objectContaining(reachedItem)),
    ]);

    expect(allReachedGrouped).toEqual(expectedReached);
  });
});

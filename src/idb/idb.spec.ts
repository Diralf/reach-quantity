import 'fake-indexeddb/auto';
import { SymbolicPeriod } from '../constants/symbolic-period';
import { initDbUtils } from './db.test-utils';
import { openReachQuantityDb, DbVersions, DbObjectStores, dbCreateTarget } from './idb-api-controller';

const { openTestDB, restoreTestDB, getAll } = initDbUtils(openReachQuantityDb);

describe('idb', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  describe('open IDB', () => {
    it('should update from 0 to 1 version', async () => {
      const db = await openTestDB(DbVersions.v1);

      expect(db.objectStoreNames).toEqual([DbObjectStores.TARGETS]);
    });

    it('should update from 0 to 2 version', async () => {
      const db = await openTestDB(DbVersions.v2);

      expect(db.objectStoreNames).toEqual([DbObjectStores.REACHED, DbObjectStores.TARGETS]);
    });

    it('should update from 1 to 2 version', async () => {
      const db1 = await openReachQuantityDb(DbVersions.v1);
      db1.close();
      expect(db1.objectStoreNames).toEqual([DbObjectStores.TARGETS]);

      const db = await openTestDB(DbVersions.v2);

      expect(db.objectStoreNames).toEqual([DbObjectStores.REACHED, DbObjectStores.TARGETS]);
    });

    it('should handle update from 1 unclosed to 2 version', async () => {
      await openReachQuantityDb(DbVersions.v1);
      const db = await openTestDB(DbVersions.v2);

      expect(db.objectStoreNames).toEqual([DbObjectStores.REACHED, DbObjectStores.TARGETS]);
    });
  });

  describe('dbCreateTarget', () => {
    it('Should create target', async () => {
      const target = {
        name: 'test name',
        quantity: 5,
        measurement: 'tests',
        period: SymbolicPeriod.CurrentQuarter,
        createdOn: new Date('2023-01-01'),
      };

      await dbCreateTarget(target);
      await dbCreateTarget(target);
      const allTargets = await getAll(DbObjectStores.TARGETS);

      expect(allTargets).toEqual([
        {
          ...target,
          id: 1,
        },
        {
          ...target,
          id: 2,
        },
      ]);
    });
  });
});

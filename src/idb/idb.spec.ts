import 'fake-indexeddb/auto';
import { IDBPDatabase, deleteDB } from 'idb';
import { openReachQuantityDb, DbVersions, DB_NAME, Schema } from './idb-api-controller';

let db: IDBPDatabase<Schema>;

describe('idb', () => {
  afterEach(async () => {
    if (db) {
      db.close();
    }
    await deleteDB(DB_NAME);
  });

  describe('open IDB', () => {
    it('should update from 0 to 1 version', async () => {
      db = await openReachQuantityDb(DbVersions.v1);

      expect(db.objectStoreNames).toEqual(['targets']);
    });

    it('should update from 0 to 2 version', async () => {
      db = await openReachQuantityDb(DbVersions.v2);

      expect(db.objectStoreNames).toEqual(['reached', 'targets']);
    });

    it('should update from 1 to 2 version', async () => {
      const db1 = await openReachQuantityDb(DbVersions.v1);
      db1.close();
      expect(db1.objectStoreNames).toEqual(['targets']);

      db = await openReachQuantityDb(DbVersions.v2);

      expect(db.objectStoreNames).toEqual(['reached', 'targets']);
    });

    it('should handle update from 1 unclosed to 2 version', async () => {
      await openReachQuantityDb(DbVersions.v1);
      db = await openReachQuantityDb(DbVersions.v2);

      expect(db.objectStoreNames).toEqual(['reached', 'targets']);
    });
  });

  describe('stores', () => {

  });
});

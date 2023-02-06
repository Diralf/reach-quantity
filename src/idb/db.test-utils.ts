import { IDBPDatabase, deleteDB, StoreValue } from 'idb';
import { DbObjectStores, DbVersions, Schema, DB_NAME } from './idb-api-controller';

interface InitDbUtils {
  openTestDB(version?: DbVersions): Promise<IDBPDatabase<Schema>>;

  getAll(store: DbObjectStores): Promise<Array<StoreValue<Schema, DbObjectStores>>>;

  restoreTestDB(): Promise<void>;
}

export const initDbUtils = (openDBCallback: (version?: DbVersions) => Promise<IDBPDatabase<Schema>>): InitDbUtils => {
  let testDB: IDBPDatabase<Schema>;

  const openTestDB: InitDbUtils['openTestDB'] = async (version?: DbVersions) => {
    testDB = await openDBCallback(version);
    return testDB;
  };

  const getAll: InitDbUtils['getAll'] = async (store: DbObjectStores) => {
    const db = await openTestDB();
    return db
      .transaction([store])
      .objectStore(store)
      .getAll();
  };

  const restoreTestDB: InitDbUtils['restoreTestDB'] = async () => {
    if (testDB) {
      testDB.close();
    }
    await deleteDB(DB_NAME);
  };

  return {
    openTestDB,
    getAll,
    restoreTestDB,
  };
};

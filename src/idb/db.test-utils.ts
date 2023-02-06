import { IDBPDatabase, deleteDB, StoreValue, StoreNames } from 'idb';
import { DBSchema } from 'idb/build/entry';

interface InitDbUtils<Schema extends DBSchema, Stores extends StoreNames<Schema>, Versions extends number> {
  openTestDB(version?: Versions): Promise<IDBPDatabase<Schema>>;

  getAll(store: Stores): Promise<Array<StoreValue<Schema, Stores>>>;

  restoreTestDB(): Promise<void>;
}

export const initDbUtils = <Schema extends DBSchema, Stores extends StoreNames<Schema>, Versions extends number>(
  dbName: string,
  openDBCallback: (version?: Versions) => Promise<IDBPDatabase<Schema>>,
): InitDbUtils<Schema, Stores, Versions> => {
  let testDB: IDBPDatabase<Schema>;

  const openTestDB: InitDbUtils<Schema, Stores, Versions>['openTestDB'] = async (version?: Versions) => {
    testDB = await openDBCallback(version);
    return testDB;
  };

  const getAll: InitDbUtils<Schema, Stores, Versions>['getAll'] = async (store: Stores) => {
    const db = await openTestDB();
    return db
      .transaction([store])
      .objectStore(store)
      .getAll();
  };

  const restoreTestDB: InitDbUtils<Schema, Stores, Versions>['restoreTestDB'] = async () => {
    if (testDB) {
      testDB.close();
    }
    await deleteDB(dbName);
  };

  return {
    openTestDB,
    getAll,
    restoreTestDB,
  };
};

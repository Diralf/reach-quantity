import 'fake-indexeddb/auto';
import { IDBPDatabase, deleteDB, StoreValue, StoreNames } from 'idb';
import { DBSchema } from 'idb/build/entry';

interface InitDbUtils<Schema extends DBSchema, Stores extends StoreNames<Schema>, Versions extends number> {
  openTestDB(version?: Versions): Promise<IDBPDatabase<Schema>>;

  testGetAll(store: Stores): Promise<Array<StoreValue<Schema, Stores>>>;

  testAdd(store: Stores, value: StoreValue<Schema, Stores>): Promise<void>;

  testBulkAction<Entity, Return>(reachedInitial: Entity[], action: (entity: Entity) => Promise<Return>): Promise<Return[]>;

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

  const testGetAll: InitDbUtils<Schema, Stores, Versions>['testGetAll'] = async (store: Stores) => {
    const db = await openTestDB();
    return db
      .transaction([store])
      .objectStore(store)
      .getAll();
  };

  const testAdd: InitDbUtils<Schema, Stores, Versions>['testAdd'] = async <S extends Stores>(store: S, value: StoreValue<Schema, S>) => {
    const db = await openTestDB();
    const objectStore = db
      .transaction([store], 'readwrite')
      .objectStore(store);
    await objectStore.add(value);
  };

  function testBulkAction<Entity, Return = void>(reachedInitial: Entity[], action: (entity: Entity) => Promise<Return>): Promise<Return[]> {
    const updates = reachedInitial.map(action);
    return Promise.all(updates);
  }

  const restoreTestDB: InitDbUtils<Schema, Stores, Versions>['restoreTestDB'] = async () => {
    if (testDB) {
      testDB.close();
    }
    await deleteDB(dbName);
  };

  return {
    openTestDB,
    testGetAll,
    testAdd,
    testBulkAction,
    restoreTestDB,
  };
};

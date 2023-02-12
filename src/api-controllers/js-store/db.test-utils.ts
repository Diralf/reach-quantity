import 'fake-indexeddb/auto';
import { Connection } from 'jsstore';
import { initJsStore, getConnection } from './db/db.init';

interface InitDbUtils {
  openConnection(): Promise<Connection>;

  restoreTestDB(): Promise<void>;

  // testGetAll(store: Stores): Promise<Array<StoreValue<Schema, Stores>>>;
  //
  // testAdd(store: Stores, value: StoreValue<Schema, Stores>): Promise<void>;
  //
  // testBulkAction<Entity, Return>(entities: Entity[], action: (entity: Entity) => Promise<Return>): Promise<Return[]>;

}

export const initDbUtils = (): InitDbUtils => {
  let connection: Connection;

  const openConnection: InitDbUtils['openConnection'] = async () => {
    connection = getConnection();
    await initJsStore(connection);
    return connection;
  };

  const restoreTestDB: InitDbUtils['restoreTestDB'] = async () => {
    await connection.dropDb();
    await connection.terminate();
  };

  // const testGetAll: InitDbUtils<Schema, Stores, Versions>['testGetAll'] = async (store: Stores) => {
  //   const db = await openTestDB();
  //   const tx = db.transaction(store);
  //   return tx.store.getAll();
  // };
  //
  // const testAdd: InitDbUtils<Schema, Stores, Versions>['testAdd'] = async <S extends Stores>(store: S, value: StoreValue<Schema, S>) => {
  //   const db = await openTestDB();
  //   try {
  //     const tx = db.transaction(store, 'readwrite');
  //     await tx.store.add(value);
  //     await tx.done;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };
  //
  // function testBulkAction<Entity, Return = void>(entities: Entity[], action: (entity: Entity) => Promise<Return>): Promise<Return[]> {
  //   const updates = entities.map(action);
  //   return Promise.all(updates);
  // }


  return {
    openConnection,
    restoreTestDB,
  };
};

const ID_COUNT_START = 1;
export const withIds = <T extends Partial<Record<keyof T, unknown>>>(list: T[]): Array<T & { id: number }> => list.map((item, index) => ({
  ...item,
  id: ID_COUNT_START + index,
}));

import 'fake-indexeddb/auto';
import { Connection } from 'jsstore';
import { initJsStore, getConnection } from './db/db.init';

interface InitDbUtils {
  openConnection(): Promise<Connection>;

  restoreTestDB(): Promise<void>;

  testGetAll<Return>(table: string): Promise<Return[]>;

  //
  // testAdd(store: Stores, value: StoreValue<Schema, Stores>): Promise<void>;
  //
  testBulkAction<Entity, Return>(con: Connection, entities: Entity[], action: (con: Connection, entity: Entity) => Promise<Return>): Promise<Return[]>;

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

  const testGetAll: InitDbUtils['testGetAll'] = (table: string) => connection.select({
    from: table,
  });

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

  async function testBulkAction<Entity, Return = void>(
    con: Connection,
    entities: Entity[],
    action: (con: Connection, entity: Entity) => Promise<Return>,
  ): Promise<Return[]> {
    const updates = entities.map((entity) => action(con, entity));
    const results: Return[] = [];

    for (const update of updates) {
      const result = await update;
      results.push(result);
    }

    return results;
  }


  return {
    openConnection,
    restoreTestDB,
    testGetAll,
    testBulkAction,
  };
};

const ID_COUNT_START = 1;
export const withIds = <T extends Partial<Record<keyof T, unknown>>>(list: T[]): Array<T & { id: number }> => list.map((item, index) => ({
  ...item,
  id: ID_COUNT_START + index,
}));

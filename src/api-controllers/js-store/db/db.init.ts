import { IDataBase, Connection } from 'jsstore';
import workerInjector from 'jsstore/dist/worker_injector';
import { DB_NAME } from './db.constants';
import { reachedTable } from './tables/reached.table';
import { targetsTable } from './tables/targets.table';

const getDatabase = (): IDataBase => ({
  name: DB_NAME,
  tables: [targetsTable, reachedTable],
});

export const getConnection = (): Connection => {
  const connection = new Connection();
  connection.addPlugin(workerInjector);
  return connection;
};

export const initJsStore = (connection: Connection): Promise<boolean> => {
  try {
    const dataBase = getDatabase();
    return connection.initDb(dataBase);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

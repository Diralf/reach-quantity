import { IDataBase, Connection } from 'jsstore';
import { reachedTable } from './tables/reached.table';
import { targetsTable } from './tables/targets.table';

export const dbname = 'REACH_QUANTITY';

const getDatabase = (): IDataBase => ({
  name: dbname,
  tables: [targetsTable, reachedTable],
});

export const initJsStore = (connection: Connection): Promise<boolean> => {
  try {
    const dataBase = getDatabase();
    return connection.initDb(dataBase);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

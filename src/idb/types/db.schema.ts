import { StoreNames } from 'idb';
import { DBSchema } from 'idb/build/entry';
import { DbReached } from './db.reached';
import { DbTargets } from './db.targets';

export interface DbSchema extends DBSchema {
  TARGETS: {
    key: number;
    value: DbTargets;
  };
  REACHED: {
    key: number;
    value: DbReached;
    indexes: {
      REACHED__TARGET_ID: number;
      REACHED__TARGET_ID__DATE: [number, Date];
    }
  };
}

export type DbStoreNames = StoreNames<DbSchema>;

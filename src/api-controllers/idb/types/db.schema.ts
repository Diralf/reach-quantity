import { TargetEntity, ReachedEntity } from '@reach-quantity/types';
import { StoreNames } from 'idb';
import { DBSchema } from 'idb/build/entry';

export interface DbSchema extends DBSchema {
  TARGETS: {
    key: number;
    value: TargetEntity;
  };
  REACHED: {
    key: number;
    value: ReachedEntity;
    indexes: {
      REACHED__TARGET_ID: number;
      REACHED__TARGET_ID__DATE: [number, Date];
      REACHED__DATE: Date;
    }
  };
}

export type DbStoreNames = StoreNames<DbSchema>;

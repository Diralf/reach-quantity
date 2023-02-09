import { IDBPDatabase, openDB } from 'idb/with-async-ittr';
import { DbSchema } from '../types/db.schema';
import { DbVersions, DB_NAME } from './db.constants';

export const openReachQuantityDb = (
  version?: DbVersions,
): Promise<IDBPDatabase<DbSchema>> => openDB(
  DB_NAME,
  version ?? DbVersions.LATEST,
  {
    upgrade(dbUpgrade, oldVersion, newVersion, transaction, event) {
      console.warn('Open IDB upgrade', {
        dbUpgrade,
        oldVersion,
        newVersion,
        transaction,
        event,
      });
      if (newVersion) {
        if (oldVersion < DbVersions.v1 && newVersion >= DbVersions.v1) {
          dbUpgrade.createObjectStore('TARGETS', {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
        if (oldVersion < DbVersions.v2 && newVersion >= DbVersions.v2) {
          const reached = dbUpgrade.createObjectStore('REACHED', {
            keyPath: 'id',
            autoIncrement: true,
          });
          reached.createIndex('REACHED__TARGET_ID', 'targetId');
          reached.createIndex('REACHED__TARGET_ID__DATE', ['targetId', 'date']);
          reached.createIndex('REACHED__DATE', 'date');
        }
      }
    },
    blocked(currentVersion, blockedVersion, event) {
      console.error('Open IDB blocked', {
        currentVersion,
        blockedVersion,
        event,
      });
    },
    blocking(currentVersion, blockedVersion, event: IDBVersionChangeEvent) {
      console.error('Open IDB blocking', {
        currentVersion,
        blockedVersion,
        event,
      });
      (event?.target as unknown as IDBPDatabase<DbSchema>)?.close();
    },
    terminated() {
      console.error('Open IDB terminated');
    },
  },
);

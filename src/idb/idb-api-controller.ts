import { openDB, IDBPDatabase } from 'idb';
import { CreateTargetParamsEntity } from '../types/entities/create-target-params.entity';
import { ReachedEntity } from '../types/entities/reached.entity';
import { TargetEntity } from '../types/entities/target.entity';
import { UpdateReachedEntity } from '../types/entities/update-reached.entity';

export const DB_NAME = 'reach-quantity';

export interface Schema {
  targets: TargetEntity[];
  reached: ReachedEntity[];
}

export enum DbVersions {
  vNO_IDB = 0,
  v1 = 1,
  v2 = 2,

  LATEST = DbVersions.v2,
}

export enum DbObjectStores {
  TARGETS = 'targets',
  REACHED = 'reached',
}

export enum DbIndexes {
  REACHED__TARGET_ID = 'REACHED__TARGET_ID',
}

export const openReachQuantityDb = (
  version?: DbVersions,
): Promise<IDBPDatabase<Schema>> => openDB(
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
          dbUpgrade.createObjectStore(DbObjectStores.TARGETS, {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
        if (oldVersion < DbVersions.v2 && newVersion >= DbVersions.v2) {
          const reached = dbUpgrade.createObjectStore(DbObjectStores.REACHED, {
            keyPath: 'id',
            autoIncrement: true,
          });
          reached.createIndex(DbIndexes.REACHED__TARGET_ID, 'targetId');
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
      (event?.target as unknown as IDBPDatabase<Schema>)?.close();
    },
    terminated() {
      console.error('Open IDB terminated');
    },
  },
);

export const dbCreateTarget = async (body: CreateTargetParamsEntity): Promise<TargetEntity> => {
  const db = await openReachQuantityDb();

  const transaction = db.transaction(DbObjectStores.TARGETS, 'readwrite');
  const targets = transaction.objectStore(DbObjectStores.TARGETS);

  const resultKey = await targets.add(body);

  const result = await targets.get(resultKey);

  await transaction.done;

  return result;
};

export const dbGetAllTargets = async (): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction([DbObjectStores.TARGETS, DbObjectStores.REACHED]);
  const targets = transaction.objectStore(DbObjectStores.TARGETS);
  const allTargets = await targets.getAll();
  const reached = transaction.objectStore(DbObjectStores.REACHED);

  let reachedCursor = await reached.index(DbIndexes.REACHED__TARGET_ID).openCursor();
  while (reachedCursor) {
    console.log(reachedCursor.key, reachedCursor.value);
    reachedCursor = await reachedCursor.continue();
  }
  return allTargets;
};

export const dbUpdateReached = async (body: UpdateReachedEntity): Promise<void> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction(DbObjectStores.REACHED, 'readwrite');
  const reached = transaction.objectStore(DbObjectStores.REACHED);

  const resultKey = await reached.add(body);

  const result = await reached.get(resultKey);
  console.log({ result });

  return transaction.done;
};

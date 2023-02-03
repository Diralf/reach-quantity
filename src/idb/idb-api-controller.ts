import { openDB, IDBPDatabase } from 'idb';
import { CreateTargetParamsEntity } from '../types/entities/create-target-params.entity';
import { TargetEntity } from '../types/entities/target.entity';
import { TargetDto } from '../types/models/target.dto';

interface Schema {
  targets: TargetDto[];
}

enum DbVersions {
  vNO_IDB = 0,
  v1 = 1,
}

const openReachQuantityDb = (): Promise<IDBPDatabase<Schema>> => openDB('reach-quantity', DbVersions.v1, {
  upgrade(dbUpgrade, oldVersion, newVersion, transaction, event) {
    console.warn('Open IDB upgrade', JSON.stringify({
      dbUpgrade,
      oldVersion,
      newVersion,
      transaction,
      event,
    }));
    if (oldVersion === DbVersions.vNO_IDB) {
      dbUpgrade.createObjectStore('targets', {
        keyPath: 'id',
        autoIncrement: true,
      });
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
    console.error('Open IDB blocking', JSON.stringify({
      currentVersion,
      blockedVersion,
      event,
    }));
    (event?.target as unknown as { result: IDBPDatabase<Schema> })?.result?.close();
  },
  terminated() {
    console.error('Open IDB terminated');
  },
});

export const dbCreateTarget = async (body: CreateTargetParamsEntity): Promise<TargetEntity> => {
  const db = await openReachQuantityDb();

  const transaction = db.transaction('targets', 'readwrite');
  const targets = transaction.objectStore('targets');

  const resultKey = await targets.add({
    ...body,
    createdOn: new Date(),
  });

  const result = await targets.get(resultKey);

  await transaction.done;

  return result;
};

export const dbGetAllTargets = async (): Promise<TargetEntity[]> => {
  const db = await openReachQuantityDb();
  const transaction = db.transaction('targets');
  const targets = transaction.objectStore('targets');
  return targets.getAll();
};

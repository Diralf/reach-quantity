import { openDB, IDBPDatabase } from 'idb';
import { ApiController } from '../types/api-controller';
import { CreateTargetParams } from '../types/models/create-target-params';
import { Target } from '../types/models/target';

interface Schema {
  targets: Target[];
}

const openReachQuantityDb = (): Promise<IDBPDatabase<Schema>> => openDB('reach-quantity', 1, {
  upgrade(dbUpgrade, oldVersion, newVersion, transaction, event) {
    console.warn('Open IDB upgrade', JSON.stringify({
      dbUpgrade,
      oldVersion,
      newVersion,
      transaction,
      event,
    }));
    if (oldVersion === 0) {
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

export const getDbApiController = (): ApiController => ({
  async createTarget(body: CreateTargetParams): Promise<Target> {
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
  },
  async getAllTargets(): Promise<Target[]> {
    const db = await openReachQuantityDb();
    const transaction = db.transaction('targets');
    const targets = transaction.objectStore('targets');
    return targets.getAll();
  },
});

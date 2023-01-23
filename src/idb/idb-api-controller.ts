import { openDB, IDBPDatabase } from 'idb';
import { ApiController } from '../types/api-controller';
import { CreateTargetParams } from '../types/models/create-target-params';
import { Target } from '../types/models/target';

interface Schema {
  targets: Target[];
}

const openReachQuantityDb = (): Promise<IDBPDatabase<Schema>> => openDB('reach-quantity', 1, {
  upgrade(dbUpgrade, oldVersion) {
    if (oldVersion === 0) {
      dbUpgrade.createObjectStore('targets', {
        keyPath: 'id',
        autoIncrement: true,
      });
    }
  },
  blocked(currentVersion, blockedVersion, event) {
    console.error('IDB blocked', {
      currentVersion,
      blockedVersion,
      event,
    });
  },
  blocking(currentVersion, blockedVersion, event) {
    console.error('IDB blocking', {
      currentVersion,
      blockedVersion,
      event,
    });
  },
  terminated() {
    console.error('IDB terminated');
  },
});

export const getDbApiController = (): ApiController => ({
  async createTarget(body: CreateTargetParams): Promise<Target> {
    const db = await openReachQuantityDb();

    const transaction = db.transaction('targets', 'readwrite');
    const targets = transaction.objectStore('targets');

    let result: Target;

    try {
      const resultKey = await targets.add({
        ...body,
        createdOn: new Date(),
      });
      const allTargets = await targets.getAll();
      console.log({ allTargets });

      result = await targets.get(resultKey);

      await transaction.done;
      console.log('Target successfully created', result);

      return result;
    } catch (error) {
      throw error;
    }
  },
  async getAllTargets(): Promise<Target[]> {
    const db = await openReachQuantityDb();
    const transaction = db.transaction('targets');
    const targets = transaction.objectStore('targets');
    return targets.getAll();
  },
});

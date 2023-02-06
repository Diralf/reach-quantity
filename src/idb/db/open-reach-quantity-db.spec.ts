import { initDbUtils } from '../db.test-utils';
import { DbSchema, DbStoreNames } from '../types/db.schema';
import { DbVersions, DB_NAME } from './db.constants';
import { openReachQuantityDb } from './open-reach-quantity-db';

const { openTestDB, restoreTestDB } = initDbUtils<DbSchema, DbStoreNames, DbVersions>(DB_NAME, openReachQuantityDb);

describe('openReachQuantityDb', () => {
  afterEach(async () => {
    await restoreTestDB();
  });

  it('should update from 0 to 1 version', async () => {
    const db = await openTestDB(DbVersions.v1);

    expect(db.objectStoreNames).toEqual(['TARGETS']);
  });

  it('should update from 0 to 2 version', async () => {
    const db = await openTestDB(DbVersions.v2);

    expect(db.objectStoreNames).toEqual(['REACHED', 'TARGETS']);
  });

  it('should update from 1 to 2 version', async () => {
    const db1 = await openReachQuantityDb(DbVersions.v1);
    db1.close();
    expect(db1.objectStoreNames).toEqual(['TARGETS']);

    const db = await openTestDB(DbVersions.v2);

    expect(db.objectStoreNames).toEqual(['REACHED', 'TARGETS']);
  });

  it('should handle update from 1 unclosed to 2 version', async () => {
    await openReachQuantityDb(DbVersions.v1);
    const db = await openTestDB(DbVersions.v2);

    expect(db.objectStoreNames).toEqual(['REACHED', 'TARGETS']);
  });
});

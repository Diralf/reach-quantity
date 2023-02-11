import { ITable, DATA_TYPE } from 'jsstore';

export const reachedTable: ITable = {
  name: 'REACHED',
  columns: {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    targetId: {
      notNull: true,
      dataType: DATA_TYPE.Number,
    },
    date: {
      notNull: true,
      dataType: DATA_TYPE.DateTime,
    },
    quantity: {
      notNull: true,
      dataType: DATA_TYPE.Number,
    },
  },
};

import { ITable, DATA_TYPE } from 'jsstore';

export const targetsTable: ITable = {
  name: 'TARGETS',
  columns: {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      notNull: true,
      dataType: DATA_TYPE.String,
    },
    quantity: {
      notNull: true,
      dataType: DATA_TYPE.Number,
    },
    measurement: {
      notNull: true,
      dataType: DATA_TYPE.String,
    },
    period: {
      notNull: true,
      dataType: DATA_TYPE.String,
    },
    createdOn: {
      notNull: true,
      dataType: DATA_TYPE.DateTime,
    },
  },
};

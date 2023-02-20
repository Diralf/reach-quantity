import { ITable, DATA_TYPE } from 'jsstore';

export const targetsTable: ITable = {
  name: 'TARGETS',
  columns: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      notNull: true,
      dataType: DATA_TYPE.String,
      enableSearch: false,
    },
    quantity: {
      notNull: true,
      dataType: DATA_TYPE.Number,
      enableSearch: false,
    },
    measurement: {
      notNull: true,
      dataType: DATA_TYPE.String,
      enableSearch: false,
    },
    period: {
      notNull: true,
      dataType: DATA_TYPE.String,
      enableSearch: false,
    },
    createdOn: {
      notNull: true,
      dataType: DATA_TYPE.DateTime,
      enableSearch: false,
    },
  },
};

import { UpdateReachedParams } from '@reach-quantity/types';

export const mockUpdateReachedParams: UpdateReachedParams = {
  targetId: 1,
  date: new Date('2023-01-01'),
  quantity: 4,
};

export const mockUpdateReachedParamsList: UpdateReachedParams[] = [
  {
    ...mockUpdateReachedParams,
    date: new Date('2023-01-01'),
    targetId: 1,
  },
  {
    ...mockUpdateReachedParams,
    date: new Date('2023-01-02'),
    targetId: 1,
  },
  {
    ...mockUpdateReachedParams,
    date: new Date('2023-01-02'),
    targetId: 2,
  },
  {
    ...mockUpdateReachedParams,
    date: new Date('2023-01-03'),
    targetId: 2,
  },
];

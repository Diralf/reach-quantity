import { DbReached } from '../../types/db.reached';

export const mockReached: DbReached = {
  targetId: 1,
  date: new Date('2023-01-01'),
  quantity: 4,
};

export const mockReachedList: DbReached[] = [
  {
    ...mockReached,
    date: new Date('2023-01-01'),
    targetId: 1,
  },
  {
    ...mockReached,
    date: new Date('2023-01-02'),
    targetId: 1,
  },
  {
    ...mockReached,
    date: new Date('2023-01-02'),
    targetId: 2,
  },
  {
    ...mockReached,
    date: new Date('2023-01-03'),
    targetId: 2,
  },
];

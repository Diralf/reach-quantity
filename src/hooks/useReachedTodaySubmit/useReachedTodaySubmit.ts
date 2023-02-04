import { DateTime } from 'luxon';
import { useApiController } from '../../contexts/ApiController';

interface Hook {
  handleReachedTodayChange(quantity: number, targetId: number): void;
}

const useReachedTodaySubmit = (): Hook => {
  const { updateReached } = useApiController();

  const handleReachedTodayChange = (quantity: number, targetId: number): void => {
    updateReached({
      quantity,
      date: DateTime.utc().startOf('day'),
      targetId,
    });
  };

  return {
    handleReachedTodayChange,
  };
};

export default useReachedTodaySubmit;

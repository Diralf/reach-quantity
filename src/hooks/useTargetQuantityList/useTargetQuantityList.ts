import { TargetDto } from '@reach-quantity/types';
import { useState, useEffect } from 'react';
import { useApiController } from '../../contexts/ApiController';

const useTargetQuantityList = (): { targetQuantityList: TargetDto[] } => {
  const { getAllTargets } = useApiController();
  const [targetQuantityList, setTargetQuantityList] = useState<TargetDto[]>([]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      const result = await getAllTargets();
      setTargetQuantityList(result);
    };
    load();
  });

  return {
    targetQuantityList,
  };
};

export default useTargetQuantityList;

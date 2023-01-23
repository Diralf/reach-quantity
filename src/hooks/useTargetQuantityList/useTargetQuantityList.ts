import { useState, useEffect } from 'react';
import { useApiController } from '../../contexts/ApiController';
import { Target } from '../../types/models/target';

const useTargetQuantityList = () => {
  const { getAllTargets } = useApiController();
  const [targetQuantityList, setTargetQuantityList] = useState<Target[]>([]);

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

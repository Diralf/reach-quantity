import { useState, useEffect } from 'react';
import { useApiController } from '../../contexts/ApiController';
import { TargetDto } from '../../types/models/target.dto';

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

import { useState, useEffect } from 'react';
import { useApiController } from '../../contexts/ApiController';
import { convertTargetFromDto } from '../../services/convert-target/convert-target';
import { Target } from '../../types/view/target';

const useTargetQuantityList = (): { targetQuantityList: Target[] } => {
  const { getAllTargets } = useApiController();
  const [targetQuantityList, setTargetQuantityList] = useState<Target[]>([]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      const result = await getAllTargets();
      setTargetQuantityList(result.map((targetDto) => convertTargetFromDto(targetDto)));
    };
    load();
  });

  return {
    targetQuantityList,
  };
};

export default useTargetQuantityList;

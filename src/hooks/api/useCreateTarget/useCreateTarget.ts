import { useController } from '../../../contexts/Controller';
import { ApiController } from '../../../types/api-controller';

const useCreateTarget = (): Pick<ApiController, 'createTarget'> => {
  const { controller } = useController();

  return {
    createTarget: controller.createTarget,
  };
};

export default useCreateTarget;

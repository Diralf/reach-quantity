import { ApiController } from '../../types/api-controller';
import { CreateTargetParams } from '../../types/models/create-target-params';
import { Target } from '../../types/models/target';

export const useCreateTarget = () => {
  const controller: ApiController = {
    createTarget(body: CreateTargetParams): Promise<Target> {
      return Promise.resolve({
        ...body,
        id: 0,
        createdOn: new Date(),
      });
    },
  };

  return {
    createTarget: controller.createTarget,
  };
};

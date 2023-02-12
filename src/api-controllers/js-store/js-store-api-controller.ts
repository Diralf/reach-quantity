import { ApiController } from '../../types/api-controller';
import { CreateTargetParamsDto } from '../../types/dto/create-target-params.dto';
import { TargetDto } from '../../types/dto/target.dto';
import { UpdateReachedDto } from '../../types/dto/update-reached.dto';
import { initJsStore, getConnection } from './db/db.init';
import { dbCreateTarget } from './stores/targets/db-create-target';

export const jsStoreApiController = async (): Promise<ApiController> => {
  const connection = getConnection();
  await initJsStore(connection);
  return {
    async updateReached(body: UpdateReachedDto): Promise<void> {
    },
    async createTarget(body: CreateTargetParamsDto): Promise<TargetDto> {
      const target = await dbCreateTarget(connection, {
        ...body,
        quantity: Number(body.quantity),
        createdOn: new Date(),
      });
      console.log({ target });
      return target;
    },
    async getAllTargets(): Promise<TargetDto[]> {
      return await [] as any;
    },
  };
};

import { ApiController } from '../../types/api-controller';
import { CreateTargetParamsDto } from '../../types/dto/create-target-params.dto';
import { TargetDto } from '../../types/dto/target.dto';
import { UpdateReachedDto } from '../../types/dto/update-reached.dto';

export const jsStoreApiController = (): ApiController => ({
  async updateReached(body: UpdateReachedDto): Promise<void> {
  },
  async createTarget(body: CreateTargetParamsDto): Promise<TargetDto> {
    return await {} as any;
  },
  async getAllTargets(): Promise<TargetDto[]> {
    return await [] as any;
  },
});

import { convertCreateTargetParamsDtoToEntity } from '../services/convert-target/convertCreateTargetParamsDtoToEntity';
import { convertTargetFromEntityToDto } from '../services/convert-target/convertTargetFromEntityToDto';
import { ApiController } from '../types/api-controller';
import { CreateTargetParamsDto } from '../types/models/create-target-params.dto';
import { TargetDto } from '../types/models/target.dto';
import { UpdateReachedDto } from '../types/models/update-reached.dto';
import { dbGetAllTargets, dbCreateTarget, dbUpdateReached } from './idb-api-controller';

export const getLocalApiController = (): ApiController => ({
  async getAllTargets(): Promise<TargetDto[]> {
    const targets = await dbGetAllTargets();

    return targets.map((target) => convertTargetFromEntityToDto(target));
  },

  async createTarget(body: CreateTargetParamsDto): Promise<TargetDto> {
    const target = await dbCreateTarget(convertCreateTargetParamsDtoToEntity(body));

    return convertTargetFromEntityToDto(target);
  },

  async updateReached(body: UpdateReachedDto): Promise<void> {
    await dbUpdateReached({ ...body, date: body.date.toJSDate() });
  },
});

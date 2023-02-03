import { convertCreateTargetParamsDtoToEntity } from '../services/convert-target/convertCreateTargetParamsDtoToEntity';
import { convertTargetFromEntityToDto } from '../services/convert-target/convertTargetFromEntityToDto';
import { ApiController } from '../types/api-controller';
import { CreateTargetParamsDto } from '../types/models/create-target-params.dto';
import { TargetDto } from '../types/models/target.dto';
import { dbGetAllTargets, dbCreateTarget } from './idb-api-controller';

export const getLocalApiController = (): ApiController => ({
  async getAllTargets(): Promise<TargetDto[]> {
    const targets = await dbGetAllTargets();

    return targets.map((target) => convertTargetFromEntityToDto(target));
  },

  async createTarget(body: CreateTargetParamsDto): Promise<TargetDto> {
    const target = await dbCreateTarget(convertCreateTargetParamsDtoToEntity(body));

    return convertTargetFromEntityToDto(target);
  },
});

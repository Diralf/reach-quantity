import { DateTime } from 'luxon';
import { convertTargetFromEntityToDto } from '../services/convert-target/convert-target';
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
    const target = await dbCreateTarget({
      ...body,
      createdOn: DateTime.utc().toJSDate(),
    });

    return convertTargetFromEntityToDto(target);
  },
});

import { ApiController, CreateTargetParamsDto, TargetDto, UpdateReachedDto } from '@reach-quantity/types';
import { DateTime } from 'luxon';
import { convertCreateTargetParamsDtoToEntity } from '../../services/convert-target/convertCreateTargetParamsDtoToEntity';
import { convertTargetFromEntityToDto } from '../../services/convert-target/convertTargetFromEntityToDto';
import { dbUpdateReached } from './stores/reached/db-update-reached';
import { dbCreateTarget } from './stores/targets/db-create-target';
import { dbGetAllTargetsWithReached } from './stores/targets/db-get-all-targets-with-reached';

export const getIDBApiController = (): ApiController => ({
  async getAllTargets(): Promise<TargetDto[]> {
    const todayStartDate = DateTime.utc().startOf('day')
      .toJSDate();
    const todayEndDate = DateTime.utc().endOf('day')
      .toJSDate();
    const targets = await dbGetAllTargetsWithReached({
      startDate: todayStartDate,
      endDate: todayEndDate,
    });

    return targets.map((target) => convertTargetFromEntityToDto(target));
  },

  async createTarget(body: CreateTargetParamsDto): Promise<number> {
    return dbCreateTarget(convertCreateTargetParamsDtoToEntity(body));
  },

  async updateReached(body: UpdateReachedDto): Promise<void> {
    await dbUpdateReached({
      ...body,
      date: body.date.toJSDate(),
    });
  },
});

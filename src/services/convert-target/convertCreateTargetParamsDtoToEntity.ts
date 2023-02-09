import { DateTime } from 'luxon';
import { CreateTargetParamsDto } from '../../types/dto/create-target-params.dto';
import { CreateTargetParams } from '../../types/params/create-target.params';

export const convertCreateTargetParamsDtoToEntity = (dto: CreateTargetParamsDto): CreateTargetParams => ({
  ...dto,
  quantity: Number(dto.quantity),
  createdOn: DateTime.utc()
    .toJSDate(),
});

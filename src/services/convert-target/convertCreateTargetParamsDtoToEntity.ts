import { DateTime } from 'luxon';
import { CreateTargetParamsEntity } from '../../types/entities/create-target-params.entity';
import { CreateTargetParamsDto } from '../../types/models/create-target-params.dto';

export const convertCreateTargetParamsDtoToEntity = (dto: CreateTargetParamsDto): CreateTargetParamsEntity => ({
  ...dto,
  quantity: Number(dto.quantity),
  createdOn: DateTime.utc().toJSDate(),
});

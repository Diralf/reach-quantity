import { CreateTargetParamsDto, CreateTargetParams } from '@reach-quantity/types';
import { DateTime } from 'luxon';

export const convertCreateTargetParamsDtoToEntity = (dto: CreateTargetParamsDto): CreateTargetParams => ({
  ...dto,
  quantity: Number(dto.quantity),
  createdOn: DateTime.utc()
    .toJSDate(),
});

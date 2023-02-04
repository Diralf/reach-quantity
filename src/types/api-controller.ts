import { CreateTargetParamsDto } from './models/create-target-params.dto';
import { TargetDto } from './models/target.dto';
import { UpdateReachedDto } from './models/update-reached.dto';

export interface ApiController {
  createTarget(body: CreateTargetParamsDto): Promise<TargetDto>;

  getAllTargets(): Promise<TargetDto[]>;

  updateReached(body: UpdateReachedDto): Promise<void>;
}

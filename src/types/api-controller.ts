import { CreateTargetParamsDto } from './dto/create-target-params.dto';
import { TargetDto } from './dto/target.dto';
import { UpdateReachedDto } from './dto/update-reached.dto';

export interface ApiController {
  createTarget(body: CreateTargetParamsDto): Promise<TargetDto>;

  getAllTargets(): Promise<TargetDto[]>;

  updateReached(body: UpdateReachedDto): Promise<void>;
}

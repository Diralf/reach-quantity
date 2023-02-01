import { CreateTargetParamsDto } from './models/create-target-params-dto';
import { TargetDto } from './models/targetDto';

export interface ApiController {
  createTarget(body: CreateTargetParamsDto): Promise<TargetDto>;

  getAllTargets(): Promise<TargetDto[]>;
}

import { CreateTargetParamsDto, TargetDto, UpdateReachedDto } from './dto';

export interface ApiController {
  createTarget(body: CreateTargetParamsDto): Promise<number>;

  getAllTargets(): Promise<TargetDto[]>;

  updateReached(body: UpdateReachedDto): Promise<void>;
}

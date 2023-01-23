import { CreateTargetParams } from './models/create-target-params';
import { Target } from './models/target';

export interface ApiController {
  createTarget(body: CreateTargetParams): Promise<Target>;
}

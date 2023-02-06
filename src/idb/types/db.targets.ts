import { TargetEntity } from '../../types/entities/target.entity';
import { WithOptional } from './db.utils';

export type DbTargets = WithOptional<TargetEntity, 'id' | 'reachedQuantities'>;

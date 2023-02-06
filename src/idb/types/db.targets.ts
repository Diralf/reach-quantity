import { TargetEntity } from '../../types/entities/target.entity';

export type DbTargets = Omit<TargetEntity, 'id' | 'reachedQuantities'> & Partial<Pick<TargetEntity, 'id' | 'reachedQuantities'>>;

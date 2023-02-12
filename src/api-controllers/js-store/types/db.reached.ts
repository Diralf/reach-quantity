import { ReachedEntity } from '../../../types/entities/reached.entity';
import { WithOptional } from './db.utils';

export type DbReached = WithOptional<ReachedEntity, 'id'>;

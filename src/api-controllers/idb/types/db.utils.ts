export type OptionalId<T extends { id: unknown }> = Omit<T, 'id'> & Partial<Pick<T, 'id'>>;
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

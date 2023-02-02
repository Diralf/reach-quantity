import { DateTime } from 'luxon';

export const formatDate = (date: DateTime): string => date.toISODate();

export const toUtcDateTime = (iso: string): DateTime => DateTime.fromISO(iso, { zone: 'utc' });

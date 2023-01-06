import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';
import { DateRange } from '../../../src/constants/date-range';

defineParameterType({
  name: 'dateRange',
  regexp: /(Current Quarter)/,
  transformer: (value) => value as DateRange,
});

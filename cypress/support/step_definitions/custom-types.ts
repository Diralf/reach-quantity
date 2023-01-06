import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';

enum DateRange {
  CURRENT_QUARTER = 'Current Quarter',
}

defineParameterType({
  name: 'dateRange',
  regexp: /(Current Quarter)/,
  transformer: (value) => value as DateRange,
});

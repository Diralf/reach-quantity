import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';
import { SymbolicRange } from '../../../src/constants/symbolic-range';

defineParameterType({
  name: 'dateRange',
  regexp: /(Current Quarter)|(Next 10 Days)/,
  transformer: (value) => value as SymbolicRange,
});

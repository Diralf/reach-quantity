import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';
import { SymbolicPeriod } from '../../../src/constants/symbolic-period';

defineParameterType({
  name: 'period',
  regexp: /Current Quarter|Next 10 Days|Next 5 Days/,
  // regexp: new RegExp('(Current Quarter)|(Next 10 Days)'),
  transformer: (value) => value as SymbolicPeriod,
});

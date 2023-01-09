import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';
import { SymbolicRange } from '../../../src/constants/symbolic-range';

const regexOfValues = SymbolicRange.values()
  .map((value) => `(${value})`)
  .join('|');

defineParameterType({
  name: 'dateRange',
  regexp: new RegExp(regexOfValues),
  transformer: (value) => value as SymbolicRange,
});

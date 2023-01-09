import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';
import { SymbolicRange } from '../../../src/constants/symbolic-range';

const regexOfValues = SymbolicRange.values()
  .map((value) => `(${value})`)
  .join('|');

defineParameterType({
  name: 'dateRange',
  regexp: /(Current Quarter)|(Next 10 Days)/,
  // regexp: new RegExp('(Current Quarter)|(Next 10 Days)'),

  // regexp: new RegExp(regexOfValues),
  transformer: (value) => value as SymbolicRange,
});

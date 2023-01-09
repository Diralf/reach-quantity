import { Given, Step } from '@badeball/cypress-cucumber-preprocessor';
import { SymbolicRange } from '../../src/constants/symbolic-range';

Given('I have created {string} target for {int} of {string} during {dateRange}', function (
  name: string,
  quantity: number,
  measurement: string,
  dateRange: SymbolicRange,
) {
  Step(this, 'I start target create process');
  Step(this, `I specify the name '${name}' for target`);
  Step(this, `I specify target ${quantity} of '${measurement}'`);
  Step(this, `I specify date range for ${dateRange}`);
  Step(this, 'I submit the target');
  Step(this, `I should see the target '${name}' on dashboard`);
});

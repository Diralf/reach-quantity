import { NumberRadix } from '../../src/constants/number-radix';
import { SymbolicPeriod } from '../../src/constants/symbolic-period';
import { goToCreatePage, shouldSeePage, fillTextField, selectDropdownOption, clickButton, findTargetCard } from '../support/step-helpers';
import { When, Then } from '../support/step-utils';

When('I go to create target page', () => {
  goToCreatePage();
});

When('I start target create process', () => {
  goToCreatePage();
  shouldSeePage('Create Target');
});

When('I specify the name {string} for target', (name: string) => {
  fillTextField('Name', name);
});

When('I specify target {int} of {string}', (quantity: number, measurement: string) => {
  fillTextField('Quantity', quantity.toString(NumberRadix.Decimal));
  fillTextField('Measurement', measurement);
});

When('I specify period for {period}', (period: SymbolicPeriod) => {
  selectDropdownOption('Period', period);
});

When('I submit the target', () => {
  clickButton('Create');
});

Then('I should see the target {string} on dashboard', (targetName: string) => {
  shouldSeePage('Dashboard');
  findTargetCard(targetName);
});

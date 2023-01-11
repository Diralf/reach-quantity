import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { NumberRadix } from '../../src/constants/number-radix';
import { SymbolicRange } from '../../src/constants/symbolic-range';
import { goToCreatePage, shouldSeePage, fillTextField } from '../support/step-helpers';

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

When('I specify target {int} of {string}', (quantity: number, measure: string) => {
  fillTextField('Quantity', quantity.toString(NumberRadix.Decimal));
  fillTextField('Measure', measure);
});

When('I specify date range for {dateRange}', (dateRange: SymbolicRange) => {
  cy.findByLabelText('Date Range')
    .click();
  cy.findByText(dateRange)
    .click();
});

When('I submit the target', () => {
  cy.findByText('Submit', { selector: 'button' })
    .click();
});

Then('I should see the target {string} on dashboard', (targetName: string) => {
  shouldSeePage('Dashboard');
  cy.findByText(targetName, { selector: 'span' });
});

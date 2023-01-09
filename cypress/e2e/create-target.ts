import { When, Step, Then } from '@badeball/cypress-cucumber-preprocessor';
import { NumberRadix } from '../../src/constants/number-radix';
import { SymbolicRange } from '../../src/constants/symbolic-range';

When('I go to create target page', () => {
  cy.findByText('Create', { selector: 'a' })
    .click();
});

When('I start target create process', function () {
  Step(this, 'I go to create target page');
  Step(this, 'I should see "Create Target" page');
});

When('I specify the name {string} for target', (name: string) => {
  cy.findByLabelText('Name', { exact: false })
    .clear()
    .type(name);
});
When('I specify target {int} of {string}', (target: number, measure: string) => {
  cy.findByLabelText('Quantity')
    .clear()
    .type(target.toString(NumberRadix.Decimal));
  cy.findByLabelText('Measure')
    .clear()
    .type(measure);
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
  Step(this, 'I should see "Dashboard" page');
  cy.findByText(targetName, { selector: 'span' });
});

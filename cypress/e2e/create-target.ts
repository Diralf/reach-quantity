import { When, Step, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DateRange } from '../../src/constants/date-range';

When('I go to create target page', () => {
  cy.findByText('Create', { selector: 'a' }).click();
});

When('I start target create process', function () {
  Step(this, 'I visit home page');
  Step(this, 'I go to create target page');
  Step(this, 'I should see "Create Target" page');
});

When('I specify the name {string} for target', (name: string) => {
  cy.findByLabelText('Target name', { exact: false })
    .clear()
    .type(name);
});
When('I specify target {int} of {string}', (target: number, measure: string) => {
  cy.findByLabelText('Target')
    .clear()
    .type(target.toString(10));
  cy.findByLabelText('Measurement')
    .clear()
    .type(measure);
});
When('I specify date range for {dateRange}', (dateRange: DateRange) => {
  cy.findByLabelText('Date range').click();
  cy.findByText(dateRange).click();
});
When('I submit the target', () => {
  cy.findByText('Submit', { selector: 'button' }).click();
});

Then('I should see the target {string} on dashboard', (targetName: string) => {
  Step(this, 'I should see "Dashboard" page');
  cy.findByText(targetName, { selector: 'span' });
});

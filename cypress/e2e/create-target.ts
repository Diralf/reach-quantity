import { When, Step, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I go to create target page', () => {
  cy.findByText('Create', { selector: 'a' }).click();
});

When('I start target create process', function () {
  Step(this, 'I go to create target page');
});

When('I specify the name {string} for target', () => 'pending');
When('I specify target {int} of {string}', () => 'pending');
When('I specify date range for {dateRange}', () => 'pending');
When('I submit the target', () => 'pending');

Then('I should see the target {string} on dashboard', () => 'pending');

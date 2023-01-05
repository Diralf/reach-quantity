import { When, Step } from '@badeball/cypress-cucumber-preprocessor';

When('I go to create target page', () => {
  cy.findByText('Create', { selector: 'a' }).click();
});

When('I start target create process', function() {
  Step(this, 'I go to create target page');
});

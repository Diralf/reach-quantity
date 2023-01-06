import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see navbar', () => {
  cy.findByRole('tablist', { exact: false });
});

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit home page', () => {
  cy.visit('/');
});

Then('I should see navbar', () => {
  cy.findByRole('tablist', { exact: false });
});

Then('I should see {string} page', (title: string) => {
  cy.findByText(title, { selector: 'h1' }).should('exist');
});

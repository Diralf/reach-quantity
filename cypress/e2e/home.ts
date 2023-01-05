import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('user visit home page', () => {
  cy.visit('/');
});

Then('user should see navbar', () => {
  cy.findByRole('tablist', { exact: false });
});

Then('use should see {string} page', (title: string) => {
  cy.findByText(title, { selector: 'h1' }).should('exist');
});

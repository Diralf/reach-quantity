import { When, Then, Given, Step } from '@badeball/cypress-cucumber-preprocessor';

Given('I on home page', () => {
  Step(this, 'I visit home page');
  Step(this, 'I should see "Dashboard" page');
});

When('I visit home page', () => {
  cy.visit('/');
});

Then('I should see {string} page', (title: string) => {
  cy.findByText(title, { selector: 'h1' })
    .should('exist');
});

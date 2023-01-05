import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(/^I visit home page$/, () => {
  cy.visit('/');
});

Then(/^I should see navbar$/, () => {
  cy.get('nav').should('exist');
});

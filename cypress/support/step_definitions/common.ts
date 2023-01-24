import { When, Then, Given, Before } from '@badeball/cypress-cucumber-preprocessor';
import { shouldSeePage } from '../step-helpers';

Before(() => cy.clearIndexedDB());

Given('I on home page', () => {
  cy.visit('/');
  shouldSeePage('Dashboard');
});

When('I visit home page', () => {
  cy.visit('/');
});

Then('I should see {string} page', (title: string) => {
  shouldSeePage(title);
});

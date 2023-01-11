import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import { shouldSeePage } from '../step-helpers';

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

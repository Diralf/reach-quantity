import { When, Then, Given, Before } from '@badeball/cypress-cucumber-preprocessor';
import { shouldSeePage, setToday } from '../step-helpers';

Before(() => cy.clearIndexedDB());

Given('I on home page', () => {
  cy.visit('/');
  shouldSeePage('Dashboard');
});

Given('Today is {string}', (date: string) => {
  setToday(date);
});

When('I visit home page', () => {
  cy.visit('/');
});

Then('I should see {string} page', (title: string) => {
  shouldSeePage(title);
});

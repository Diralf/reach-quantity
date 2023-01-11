import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Cypress from 'cypress';
import { NumberRadix } from '../../src/constants/number-radix';
import { SymbolicRange } from '../../src/constants/symbolic-range';
import { goToCreatePage, shouldSeePage } from '../support/step-helpers';

Given('I have created {string} target for {int} of {string} during {dateRange}', (
  name: string,
  quantity: number,
  measurement: string,
  dateRange: SymbolicRange,
) => {
  goToCreatePage();
  shouldSeePage('Create Target');
  cy.findByLabelText('Name', { exact: false })
    .clear()
    .type(name);
  cy.findByLabelText('Quantity')
    .clear()
    .type(quantity.toString(NumberRadix.Decimal));
  cy.findByLabelText('Measure')
    .clear()
    .type(measurement);
  cy.findByLabelText('Date Range')
    .click();
  cy.findByText(dateRange)
    .click();
  cy.findByText('Submit', { selector: 'button' })
    .click();
  shouldSeePage('Dashboard');
  cy.findByText(name, { selector: 'span' });
});
Given('I visit dashboard page', () => {
  cy.visit('/dashboard');
});

interface CardContext extends Mocha.Context {
  card?: Cypress.Chainable<JQuery>;
}

When<unknown[], CardContext>('I found {string} target card on dashboard', function (
  name: string,
) {
  this.card = cy.findByLabelText(`${name} card`);
});

function checkContext() {
  if (!this.card) {
    throw new Error('context.card should be defined');
  }
}

Then<unknown[], CardContext>(
  'I should see small property {string} with value {string} on the card',
  function (
    fieldName: string,
    value: string,
  ) {
    checkContext.call(this);
    this.card.within(() => {
      cy.findByText(fieldName, { selector: 'strong' })
        .should('exist');
      cy.findByText(value, { selector: 'span' })
        .should('exist');
    });
  },
);

Then<unknown[], CardContext>('I should see today target with label {string}', function (
  label: string,
) {
  checkContext.call(this);
  this.card.within(() => {
    cy.findByText(label, { selector: 'span' })
      .should('exist');
  });
});

Then<unknown[], CardContext>('I should see today target value {int}', function (
  quantity: number,
) {
  checkContext.call(this);
  this.card.within(() => {
    cy.findByText(quantity, { selector: 'h2' })
      .should('exist');
  });
});

Then<unknown[], CardContext>('I should see target {int} for {string}', function (
  quantity: number,
  dayLabel: string,
) {
  checkContext.call(this);
  this.card.within(() => {
    cy.findByLabelText(dayLabel)
      .within(() => {
        cy.findByText(quantity)
          .should('exist');
      });
  });
});

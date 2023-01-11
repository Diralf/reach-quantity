import {
  Given,
  Step,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';
import * as Cypress from 'cypress';
import { SymbolicRange } from '../../src/constants/symbolic-range';

Given('I have created {string} target for {int} of {string} during {dateRange}', function (
  name: string,
  quantity: number,
  measurement: string,
  dateRange: SymbolicRange,
) {
  Step(this, 'I start target create process');
  Step(this, `I specify the name '${name}' for target`);
  Step(this, `I specify target ${quantity} of '${measurement}'`);
  Step(this, `I specify date range for ${dateRange}`);
  Step(this, 'I submit the target');
  Step(this, `I should see the target '${name}' on dashboard`);
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
  'I should see small property {string} with value {string}/{dateRange} on the card',
  function (
    fieldName: string,
    value: string | SymbolicRange,
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

Then<unknown[], CardContext>('I should see target {number} for {string}', function (
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

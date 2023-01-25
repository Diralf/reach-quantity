import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import * as Cypress from 'cypress';
import { NumberRadix } from '../../src/constants/number-radix';
import { SymbolicPeriod } from '../../src/constants/symbolic-period';
import { goToCreatePage, shouldSeePage, fillTextField, selectDropdownOption, clickButton, findTargetCard } from '../support/step-helpers';

Given('I have created {string} target for {int} of {string} during {period}', (
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
) => {
  goToCreatePage();
  shouldSeePage('Create Target');
  fillTextField('Name', name);
  fillTextField('Quantity', quantity.toString(NumberRadix.Decimal));
  fillTextField('Measurement', measurement);
  selectDropdownOption('Period', period);
  clickButton('Create');
  shouldSeePage('Dashboard');
  findTargetCard(name);
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
  this.card = findTargetCard(name);
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

Then<unknown[], CardContext>('I should see target for day', function (
  dataTable: DataTable,
) {
  checkContext.call(this);
  const hashes = dataTable.hashes();
  this.card.within(() => {
    hashes.forEach(({
      day,
      target,
    }) => {
      const nextDayBox = cy.findByLabelText(day);
      nextDayBox.within(() => cy.findByText(target)
        .should('exist'));
    });
  });
});

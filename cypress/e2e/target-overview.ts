import { SymbolicPeriod } from '../../src/constants/symbolic-period';
import { findTargetCard, createTarget } from '../support/step-helpers';
import { CardContext } from '../support/step-types';
import { Given, When, Then, DataTable } from '../support/step-utils';

Given('I have created {string} target for {int} of {string} during {period}', (
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
) => {
  createTarget(name, quantity, measurement, period);
});
Given('I visit dashboard page', () => {
  cy.visit('/dashboard');
});

When<CardContext>('I found {string} target card on dashboard', function (
  name: string,
) {
  this.card = findTargetCard(name);
});

function checkContext() {
  if (!this.card) {
    throw new Error('context.card should be defined');
  }
}

Then<CardContext>(
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

Then<CardContext>('I should see today target with label {string}', function (
  label: string,
) {
  checkContext.call(this);
  this.card.within(() => {
    cy.findByText(label, { selector: 'span' })
      .should('exist');
  });
});

Then<CardContext>('I should see today target value {int}', function (
  quantity: number,
) {
  checkContext.call(this);
  this.card.within(() => {
    cy.findByText(quantity, { selector: 'h2' })
      .should('exist');
  });
});

Then<CardContext>('I should see target for day', function (
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

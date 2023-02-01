import { SymbolicPeriod } from '../../../src/constants/symbolic-period';
import { CardContext } from '../step-contexts';
import { createTarget, findTargetCard, setToday, shouldSeePage } from '../step-helpers';
import { When, Given } from '../step-utils';

Given('I have created {string} target for {int} of {string} during {period} at {string}', (
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
  createDate: string,
) => {
  setToday(createDate);
  cy.visit('/');
  shouldSeePage('Dashboard');
  createTarget(name, quantity, measurement, period);
});

When<CardContext>('I found just created {string} target for {int} of {string} during {period}', function (
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
) {
  cy.visit('/');
  shouldSeePage('Dashboard');
  createTarget(name, quantity, measurement, period);
  this.card = findTargetCard(name);
});

When<CardContext>('I found {string} target card on dashboard', function (
  name: string,
) {
  cy.visit('/dashboard');
  this.card = findTargetCard(name);
});

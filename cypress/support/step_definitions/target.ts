import { SymbolicPeriod } from '../../../src/constants/symbolic-period';
import { createTarget, findTargetCard } from '../step-helpers';
import { CardContext } from '../step-types';
import { Given } from '../step-utils';

Given<CardContext>('I found just created {string} target for {int} of {string} during {period}', function (
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
) {
  cy.visit('/');
  createTarget(name, quantity, measurement, period);
  this.card = findTargetCard(name);
});

import { SymbolicPeriod } from '../../../src/constants/symbolic-period';
import { CardContext } from '../step-contexts';
import { createTarget, findTargetCard } from '../step-helpers';
import { When } from '../step-utils';

When<CardContext>('I found just created {string} target for {int} of {string} during {period}', function (
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
) {
  cy.visit('/');
  createTarget(name, quantity, measurement, period);
  this.card = findTargetCard(name);
});

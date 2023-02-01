import { SymbolicPeriod } from '../../../src/constants/symbolic-period';
import { CardContext } from '../../support/step-contexts';
import { Then } from '../../support/step-utils';

Then<CardContext>('I should see period {period} on the card', function (period: SymbolicPeriod) {
  CardContext.check(this);
  this.card.within(() => {
    cy.findByText(period, { selector: 'span' }).should('exist');
  });
});

Then<CardContext>('I should see exact dates {string} on the card', function (exactDates: string) {
  CardContext.check(this);
  this.card.within(() => {
    cy.findByText(exactDates, { selector: 'span' }).should('exist');
  });
});

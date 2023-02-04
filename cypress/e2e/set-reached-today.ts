import { CardContext } from '../support/step-contexts';
import { fillTextField } from '../support/step-helpers';
import { When, Then } from '../support/step-utils';

When<CardContext>('I specify reached today quantity to {int}', function (reachedToday: number) {
  this.card.within(() => {
    fillTextField('Reached today', reachedToday.toString());
  });
});

Then<CardContext>('I should see today reached quantity as {int}', function (reachedToday: number) {
  this.card.within(() => {
    cy.findByLabelText('Reached today').should('contain.value', reachedToday);
  });
});

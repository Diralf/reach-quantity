import { Then } from '../support/step-utils';

Then('I should see navbar', () => {
  cy.findByRole('tablist', { exact: false });
});

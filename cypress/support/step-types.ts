import Cypress from 'cypress';

export interface CardContext extends Mocha.Context {
  card?: Cypress.Chainable<JQuery>;
}

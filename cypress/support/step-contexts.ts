import Cypress from 'cypress';

function checkContext(context: Record<string, unknown>, expectedKeys: string[]) {
  const missedKeys = expectedKeys.filter((key) => !(key in context));
  if (missedKeys.length > 0) {
    throw new Error(`Current context missed the following properties:
    "${missedKeys}".
    You probably missed some step which define those properties into context.`);
  }
}

export interface CardContext extends Mocha.Context {
  card?: Cypress.Chainable<JQuery>;
}

export const CardContext = {
  check(context: CardContext) {
    checkContext(context, ['card']);
  },
};

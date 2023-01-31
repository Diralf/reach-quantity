import { DataTable, defineStep } from '@badeball/cypress-cucumber-preprocessor';
import { IStepDefinitionBody } from '@badeball/cypress-cucumber-preprocessor/lib/types';

function customDefineStep<C extends Mocha.Context, T extends unknown[] = unknown[]>(
  description: string | RegExp,
  implementation: IStepDefinitionBody<T, C>,
) {
  defineStep<T, C>(description, implementation);
}

export {
  customDefineStep as Given,
  customDefineStep as When,
  customDefineStep as Then,
  DataTable,
};

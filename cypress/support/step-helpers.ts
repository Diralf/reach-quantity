import { NumberRadix } from '../../src/constants/number-radix';
import { SymbolicPeriod } from '../../src/constants/symbolic-period';

export function shouldSeePage(title: string) {
  cy.findByText(title, { selector: 'h1' })
    .should('exist');
}

export function goToCreatePage() {
  cy.findByText('Create', { selector: 'a' })
    .click();
}

export function fillTextField(fieldName: string, value: string) {
  cy.findByLabelText(fieldName, { exact: false })
    .clear()
    .type(value);
}

export function selectDropdownOption(selectFieldName: string, optionToSelect: string) {
  cy.findByLabelText(selectFieldName)
    .click();
  cy.findByText(optionToSelect)
    .click();
}

export function clickButton(buttonLabel: string) {
  cy.findByText(buttonLabel, { selector: 'button' })
    .click();
}

export function findTargetCard(targetName: string) {
  return cy.findByLabelText(`${targetName} card`);
}

export function createTarget(
  name: string,
  quantity: number,
  measurement: string,
  period: SymbolicPeriod,
) {
  goToCreatePage();
  shouldSeePage('Create Target');
  fillTextField('Name', name);
  fillTextField('Quantity', quantity.toString(NumberRadix.Decimal));
  fillTextField('Measurement', measurement);
  selectDropdownOption('Period', period);
  clickButton('Create');
  shouldSeePage('Dashboard');
  findTargetCard(name);
}

export function setToday(date: string) {
  cy.clock(new Date(date), ['Date'], { log: true });
}

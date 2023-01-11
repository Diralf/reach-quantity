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

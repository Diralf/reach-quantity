export function shouldSeePage(title: string) {
  cy.findByText(title, { selector: 'h1' })
    .should('exist');
}

export function goToCreatePage() {
  cy.findByText('Create', { selector: 'a' })
    .click();
}

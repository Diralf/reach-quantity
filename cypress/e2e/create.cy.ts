describe('create', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href*="create"]').click();

    cy.url().should('include', '/create');
    cy.get('h1').contains('Create New Target');
  });

  it('Should navigate to create page', () => {
    cy.findByLabelText('Target')
      .should('exist')
      .type('500')
      .should('contain.value', '500');
  });
});

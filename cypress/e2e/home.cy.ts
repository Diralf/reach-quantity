describe('Home', () => {
  it('Should passes', () => {
    cy.visit('/');
  });

  it('Should navigate to examples page', () => {
    cy.visit('/');
    cy.get('a[href*="example"]').click();

    cy.url().should('include', '/example');
    cy.get('h1').contains('Example');
  });

  it('Should navigate to create page', () => {
    cy.visit('/');
    cy.get('a[href*="create"]').click();

    cy.url().should('include', '/create');
    cy.get('h1').contains('Create New Target');
  });
});

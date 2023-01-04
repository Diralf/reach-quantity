describe('Home', () => {
  it('Should passes', () => {
    cy.visit('/');
  });

  it('Should navigate to examples', () => {
    cy.visit('/');
    cy.get('a[href*="example"]').click();

    cy.url().should('include', '/example');
    cy.get('h1').contains('Example');
  });
});

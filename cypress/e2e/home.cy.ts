describe('Home', () => {
  it('Should passes', () => {
    cy.visit('http://localhost:3000');
  });

  it('Should navigate to examples', () => {
    cy.visit('http://localhost:3000');
    cy.get('a[href*="example"]').click();

    cy.url().should('include', '/example');
    cy.get('h1').contains('Example');
  });
});

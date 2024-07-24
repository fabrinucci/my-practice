it('wait test"', () => {
	cy.visit('https://docs.cypress.io/api/commands/wait');

	cy.get('#Syntax', { timeout: 6000 }).should('be.visible');
});

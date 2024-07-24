describe('Assertions', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
		cy.once('uncaught:exception', () => false);
	});

	it('assertions', () => {
		cy.url().should('include', 'demoqa.com');
		cy.get('#firstName')
			.should('be.visible')
			.should('have.attr', 'placeholder', 'First Name');
	});

	it('assertions 2', () => {
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible;
			expect(element).to.have.attr('placeholder', 'First Name');
		});
	});

	it('assertions 3', () => {
		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name');
		});
	});
});

describe('Work with inputs', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
		cy.visit('/automation-practice-form');
	});

	it('input type text', () => {
		cy.get('#firstName').type('Cristian');
		cy.get('#lastName').type('Maceda');
		cy.get('#userEmail').type('cris-maceda@mail.com');

		cy.get('#firstName').type('{selectAll}{backspace}');
		cy.get('#firstName').type('Cristian');
		cy.get('#lastName').clear();
		cy.get('#lastName').type('Maceda');
	});
});

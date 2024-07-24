describe('Assertions', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
	});

	it('click', () => {
		cy.visit('/buttons');
		cy.get('button').eq(3).click();
		cy.get('#dynamicClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a dynamic click');
	});
	it('double click', () => {
		cy.visit('/buttons');
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a double click');
	});
	it('right click', () => {
		cy.visit('/buttons');
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a right click');
	});

	it('force', () => {
		cy.visit('/dynamic-properties');
		cy.get('#enableAfter').click({ timeout: 0, force: true });
	});
});

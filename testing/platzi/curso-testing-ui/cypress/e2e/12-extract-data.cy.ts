describe('Extracting Data', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
		cy.visit('/automation-practice-form');
	});

	it('extract data', function () {
		cy.get('#firstName').as('name');
		cy.get('@name').type('Cristian');
		cy.get('@name').then((name) => {
			expect(name.val()).to.eq('Cristian');
		});
		cy.get('@name').invoke('val').should('eq', 'Cristian');
		cy.get('@name').invoke('val').as('globalName');
	});

	it('share data', function () {
		cy.get('#lastName').as('lastName');
		cy.get('@lastName').type(this.globalName);
	});
});

describe('Save Items', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
		cy.visit('/automation-practice-form');
	});

	it('Yields', () => {
		cy.get('input[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const inputs = form.find('input');
				const divs = form.find('div');
				const labels = form.find('label');

				// ---------------- first or second --------------------------------------
				expect(inputs.length).to.equal(15);
				cy.wrap(inputs).should('have.length', 15);
				// ------------------------------------------------------------------------
				expect(divs.length).to.equal(70);
				expect(labels.length).to.equal(16);
			});
	});
});

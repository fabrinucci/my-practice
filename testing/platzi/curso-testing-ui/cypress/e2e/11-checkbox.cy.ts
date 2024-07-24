describe('CheckBoxes and RadioButtons', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
		cy.visit('/automation-practice-form');
	});

	it('radio button', () => {
		// cy.get('#gender-radio-1').click({ force: true });
		// cy.get("#gender-radio-1").check({ force: true });
		cy.get('label[for="gender-radio-1"]').click();
	});

	it('check box', () => {
		// cy.get("#hobbies-checkbox-1").click({ force: true });
		// cy.get("#hobbies-checkbox-1").check({ force: true });
		// cy.get("#hobbies-checkbox-1").uncheck({ force: true });
		cy.get('label[for="hobbies-checkbox-1"]').click();
	});
});

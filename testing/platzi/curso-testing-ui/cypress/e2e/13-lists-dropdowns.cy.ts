describe('List and Dropdowns(Select)', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
	});

	it('dropdowns', () => {
		cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
		cy.get('select').select(3).should('have.value', 'audi');
	});

	it('dynamics dropdowns', function () {
		cy.visit('https://react-select.com/home');
		cy.get('#react-select-6-input').type(' ');
		cy.get('#react-select-6-listbox').children().contains('Silver').click();
		cy.get('#react-select-6-listbox')
			.children()
			.each((element) => {
				if (element.text() === 'Red') {
					cy.wrap(element).click();
				}
			});
		cy.get('#react-select-6-listbox')
			.children()
			.contains('Purple')
			.should('have.text', 'Purple');
	});
});

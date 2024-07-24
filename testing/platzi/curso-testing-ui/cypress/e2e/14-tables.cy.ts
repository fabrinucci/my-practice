describe('Tables', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
	});

	it('tables', function () {
		cy.visit('https://www.w3schools.com/html/html_tables.asp');

		cy.get('#customers')
			.find('th')
			.each((element) => {
				cy.log(element.text());
			});

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('eq', 'Company');

		cy.get('#customers')
			.find('th')
			.eq(1)
			.invoke('text')
			.should('eq', 'Contact');

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('eq', 'Country');

		cy.get('#customers').find('tr').should('have.length', 7);
		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('eq', 'Maria Anders');

		cy.get('#customers').find('tr').should('have.length', 7);
		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.then((element) => {
				expect(element.text()).to.eq('Maria Anders');
			});
	});
});

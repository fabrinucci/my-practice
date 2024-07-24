describe('Date pickers ', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
	});
	it('date picker', () => {
		cy.visit('https://material.angular.io/components/datepicker/overview');
		cy.get('datepicker-overview-example').find('label').eq(0).type('7/18/2024');
		cy.get('datepicker-overview-example').find('button').click();
	});
});

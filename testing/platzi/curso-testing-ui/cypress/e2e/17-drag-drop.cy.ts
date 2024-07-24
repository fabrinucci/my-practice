describe('Drag and Drop', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
		cy.visit('/dragabble');
	});

	it('drag and drop', () => {
		cy.get('#dragBox')
			.trigger('mousedown', {
				which: 1,
				pageX: 0,
				pageY: 0,
			})
			.trigger('mousemove', { which: 1, pageX: 200, pageY: 200 })
			.trigger('mouseup');
	});
});

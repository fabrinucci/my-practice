describe('Prueba de navegacion', () => {
	it('Navegando a un sitio', () => {
		cy.visit('https://platzi.com');
	});

	it('Recargar una pagina', () => {
		cy.reload();
	});

	it('Force reload  una pagina', () => {
		cy.visit('https://google.com');
		cy.reload(true);
	});

	it('Navegar hacia atras y adelante en una pagina', () => {
		cy.visit('https://google.com');
		cy.visit('https://www.google.com/imghp?hl=en&ogbl');
		cy.go('back');
		cy.go('forward');
		// cy.go(-1)
		// cy.go(1)
	});

	it('Navegar hacia atras y adelante en una pagina con chain command', () => {
		cy.visit('https://google.com');
		cy.visit('https://www.google.com/imghp?hl=en&ogbl')
			.go('back')
			.go('forward');
	});
});

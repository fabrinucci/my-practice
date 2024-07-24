describe('PopUps and ToolTips', () => {
	beforeEach(() => {
		cy.once('uncaught:exception', () => false);
	});
	it('modal', () => {
		cy.visit('/modal-dialogs');
		cy.get('#showSmallModal').click();
		cy.get('.close').click();
		cy.get('#showSmallModal').click();
		cy.get('#closeSmallModal').click();
	});

	it('alert', () => {
		cy.visit('/alerts');

		// const stub = cy.stub();
		// cy.on("window:confirm", stub);
		// cy.get("#confirmButton")
		//   .click()
		//   .then((element) => {
		//     expect(stub.getCall(0)).to.be.calledWith("Do you confirm action?");
		//   });
		// cy.contains("You selected Ok").should("exist");

		cy.get('#confirmButton').click();
		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.eq('Do you confirm action?');
		});
		cy.contains('You selected Ok').should('exist');
	});

	it('cancel alert', () => {
		cy.visit('/alerts');

		cy.get('#confirmButton').click();
		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.eq('Do you confirm action?');
			return false;
		});
		cy.contains('You selected Cancel').should('exist');
	});

	it('cancel alert', () => {
		cy.visit('/tool-tips');

		cy.get('#toolTipButton').trigger('mouseover');
		cy.contains('You hovered over the Button').should('exist');
		cy.get('#toolTipButton').trigger('mouseout');
		cy.contains('You hovered over the Button').should('not.exist');
	});
});

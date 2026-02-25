/// <reference types="cypress" />

context('modal', () => {
    beforeEach(() => {
        cy.visit('../../src/modal.html')
    })

    it('should open the modal', () => {
        cy.dataCy('open-modal-button').click()
        cy.dataCy('modal-outside').should('be.visible')
    })

    it('should close the modal', () => {
        cy.dataCy('open-modal-button').click()
        cy.dataCy('modal-outside').should('be.visible')
        cy.get('body').click(0,0);
        cy.dataCy('modal-outside').should('not.be.visible')
    })

    it('should have h2 text "Lorem Ipsum"', () => {
        cy.dataCy('open-modal-button').click()
        cy.dataCy('modal-outside').should('be.visible')
        cy.dataCy('modal-content').should('be.visible')
        cy.dataCy('modal-content').within(() => {
            cy.get('h2').should('contain', 'Lorem Ipsum')
        })
    })

});
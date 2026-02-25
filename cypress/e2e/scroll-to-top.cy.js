/// <reference types="cypress" />

context('scroll-to-top', () => {
    beforeEach(() => {
        cy.visit('../../src/scroll-to-top.html')
    })

    it('should get the scroll-to-top button', () => {
        cy.scrollTo('bottom')
        cy.dataCy('scroll-to-top-button').should('be.visible')
    })

    it('should test the scroll-to-top button', () => {
        cy.scrollTo('bottom')
        cy.dataCy('scroll-to-top-button').should('be.visible')
        cy.dataCy('scroll-to-top-button').click()
        cy.dataCy('scroll-to-top-button').should('not.be.visible')

    })

});
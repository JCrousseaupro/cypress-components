/// <reference types="cypress" />

context('smart-tag', () => {
    beforeEach(() => {
        cy.visit('../../src/smart-tag.html')
    })

    it('should hover the smart-tag button', () => {
        cy.dataCy('smart-tag-button').trigger('mouseover')
        cy.dataCy('smart-tag-content').should('be.visible')
    })

    it('should leave the smart-tag button', () => {
        cy.dataCy('smart-tag-button').trigger('mouseleave')
        cy.dataCy('smart-tag-content').should('not.be.visible')
    })
});
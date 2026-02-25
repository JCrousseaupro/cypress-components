/// <reference types="cypress" />

context('todolist', () => {
    beforeEach(() => {
        cy.visit('../../src/todolist.html')
    })
    it('should add multiple todos', () => {
        cy.dataCy('todo-input').should('be.visible')
        cy.dataCy('todo-input').type('Todo 1')
        cy.dataCy('add-todo-button').should('be.visible')
        cy.dataCy('add-todo-button').click()
        cy.dataCy('todo-item').should('contain', 'Todo 1')
        cy.dataCy('todo-input').should('be.visible')
        cy.dataCy('todo-input').type('Todo 2')
        cy.dataCy('add-todo-button').should('be.visible')
        cy.dataCy('add-todo-button').click()
        cy.dataCy('todo-item').should('contain', 'Todo 2')
        cy.dataCy('todo-input').should('be.visible')
        cy.dataCy('todo-input').type('Todo 3')
        cy.dataCy('add-todo-button').should('be.visible')
        cy.dataCy('add-todo-button').click()
        cy.dataCy('todo-item').should('contain', 'Todo 3')
        cy.dataCy('todo-input').should('be.visible')
        cy.dataCy('todo-input').type('Todo 4')
        cy.dataCy('add-todo-button').should('be.visible')
        cy.dataCy('add-todo-button').click()
        cy.dataCy('todo-item').should('contain', 'Todo 4')
        cy.dataCy('delete-todo-button').eq(2).click()
        cy.dataCy('todo-item').should('not.contain', 'Todo 3')
        cy.dataCy('todo-item').should('have.length', 3)
    })
});
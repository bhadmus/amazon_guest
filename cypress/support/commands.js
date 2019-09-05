// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("iSearchedFor", ()=>{
    cy.get('#twotabsearchtextbox').type('Cardillac')
    cy.get('.nav-search-submit > .nav-input').click()
})

Cypress.Commands.add("clickVerifyCart", ()=>{
    cy.get('[data-asin="B000025R46"] > :nth-child(1) > .s-expand-height > .a-spacing-medium > :nth-child(2) > :nth-child(3) > .sg-col-inner > .a-section > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
    cy.get('#a-autoid-4-announce > :nth-child(1)').contains('Audio CD').should('be.visible')
    cy.get('#add-to-cart-button-ubb').click()
})
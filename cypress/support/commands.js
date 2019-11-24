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
    cy.get('[data-asin="B000XXWFMK"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > .sg-col-16-of-24 > :nth-child(1) > :nth-child(1) > .sg-col-4-of-12 > .sg-col-inner > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium').click()
    cy.get('.a-size-large').contains('(Excerpts)').should('be.visible')
    cy.get('#dm_atcb_B000XXWFMK-announce').click()
})
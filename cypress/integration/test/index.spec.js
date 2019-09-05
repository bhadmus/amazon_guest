/// <reference types="Cypress" />

context('The Shopper\'s Journey:  ', () => {
    it('It automates what happens when a guest tries to checkout on a shopping site', ()=>{
        // Navigate to the amazon site
        cy.visit('/')
        
        // Type Cardillac into the text box 
        //cy.get('#twotabsearchtextbox').type('Cardillac')

        // So I created a custom command ("fetch") here to search for Cardillac(the code above) and then submit the search word (the code below)
        cy.iSearchedFor('Cardillac')

        // Submit the search word
        //cy.get('.nav-search-submit > .nav-input').click()

        // Pick the first one of the result (I was hoping to see a car as the result returned, but it is ok)
        //cy.get('[data-asin="B000025R46"] > :nth-child(1) > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > .sg-col-16-of-24 > :nth-child(1) > :nth-child(1) > .sg-col-4-of-12 > .sg-col-inner > .a-section > .a-size-mini > .a-link-normal > .a-size-medium').click()
        
        // Verify that Audio CD is present
        //cy.get('#a-autoid-4-announce > :nth-child(1)').contains('Audio CD').should('be.visible')
        
        //So I decided to experiment with more custom commands and this is a really cool feature, fewer lines of codes to display, neater looking scripts.
        // I combined three lines of codes into one, Picked the item, verified that Audio CD was there then I added to cart with a single line of code.
        cy.clickVerifyCart('Cardillac and Audio CD')
        
        // Add it to Cart
        //cy.get('#add-to-cart-button-ubb').click()

        // Proceed to checkout
        cy.get('#hlb-ptc-btn-native').click()

        // Assert that the create account button is present
        cy.get('#createAccountSubmit').contains('Create').should('be.visible')
        
    })
  })
  
/// <reference types="Cypress" />

context('The Shopper\'s Journey:  ', () => {
    it('It automates what happens when a guest tries to checkout on a shopping site', ()=>{
        // Navigate to the amazon site
        cy.visit('/')
        
        // Type Cardillac into the text box 
        //cy.get('#twotabsearchtextbox').type('Cardillac')

        // So I created a custom command ("iSearchedFor") here to search for Cardillac(the code above) and then submit the search word (the code below)
        cy.iSearchedFor('Cardillac')
        
        //So I decided to experiment with more custom commands and this is a really cool feature, fewer lines of codes to display, neater looking scripts.
        // I combined three lines of codes into one, Picked the item, verified that Audio CD was there then I added to cart with a single line of code.
        cy.clickVerifyCart('Cardillac and (Excerpts)')
        
        // Add it to Cart
        //cy.get('#add-to-cart-button-ubb').click()

        // Proceed to checkout
        cy.get('#dm_atcb_B000XXWFMK-announce').click()

        // Exit the popup screeen
        cy.get('span#BBOPnoThanks  .a-button-input').click()

        // Assert that the create account button is present
        cy.get('#createAccountSubmit').contains('Create').should('be.visible')
        
    })
  })
  
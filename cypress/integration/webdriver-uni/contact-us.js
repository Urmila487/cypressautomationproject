///<reference types="Cypress" />

describe("Test contact-us from a WebDriver University",() => {
    it("Should be able to submit a successful submission via contact us from" , () => {
       //Cypress code 
        //cy.visit('http://www.webdriveruniversity.com/index.html')
        //cy.get('#contact-us').click({force:true})
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        cy.get('h2').should('have.text','CONTACT US')
        cy.get('[name="first_name"]').type('Urmila')
        cy.get('[name="last_name"]').type('vadi')
        cy.get('[name="email"]').type('urmila@gmail.com')
        cy.get('textarea.feedback-input').type('I want to signup this web university')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it("Should not be able to submit a successful via contact us from all fields are required" , () => {
        //Cypress code 
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Urmila')
        cy.get('[name="last_name"]').type('vadi')
        cy.get('textarea.feedback-input').type('I want to signup this web university')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
 
 
 
     })


})
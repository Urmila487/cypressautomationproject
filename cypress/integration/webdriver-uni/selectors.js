///<reference types="Cypress" />

describe("Test contact-us from a WebDriver University",() => {
    it("Should be able to submit a successful submission via contact us from" , () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')


        // By Tag name
        cy.get('input')

        //By attribute name and value

        cy.get("input[name='first_name']")

    })
    })
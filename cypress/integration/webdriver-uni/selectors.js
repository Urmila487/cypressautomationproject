///<reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Test contact-us from a WebDriver University",() => {
    it("Should be able to submit a successful submission via contact us from" , () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')


        // By Tag name
        cy.get('input')

        //By attribute name and value

        cy.get("input[name='first_name']")

        //By id
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top")

        //By different attributes
        cy.get("input[name='email'][placeholder='Email Address']")


        //By Xpath
        cy.xpath("//input[@name='first_name']").type('Urmila')


    })
    })
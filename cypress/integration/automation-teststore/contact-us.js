///<reference types="Cypress" />

describe("Test contact-us from a Automation Test Store",() => {
    it("Should be able to submit a successful submission via contact us from" , () => {
        cy.visit('https://www.automationteststore.com/')
        //a[contains(text(),'Contact Us')] xpath
        //a[contains(@href,'contact')] xpath
        cy.get("a[href$='contact']").click()
        //cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('Urmila')
        cy.get('#ContactUsFrm_email').type('urmila@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide discount')
        cy.get("button[title='Submit']").click()
        
    })

})
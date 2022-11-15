import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I opened Xendit login page', () => {
    cy.visit('https://dashboard.xendit.co')
})

Then('I see the page', () => {
    cy.log('Test')
})
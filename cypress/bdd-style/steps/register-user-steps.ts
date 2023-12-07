import { When } from "@badeball/cypress-cucumber-preprocessor";

When('I navigate to the Book Store application', () => {
    cy.visit('/login');
});
When('I click on the Login button', () => {
})

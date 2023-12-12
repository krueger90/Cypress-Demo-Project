import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { CY_ROUTES } from '../../support/routes';
import { assertUrlContains } from '../asserts/generic-asserts';
import { Homepage } from '../../page-objects/Homepage';

const homepage = new Homepage();

Given('I navigate to the SUT', () => {
    cy.visit('/');
});
When('I navigate to the {string} page', (route: string) => {
    cy.visit(CY_ROUTES.get(route));
});

When('I click on the {string} button', (button: string) => {
    cy.contains(button).click({ force: true });
});

Then('I am redirected to the account page', () => {
    assertUrlContains("route=account/account");
});

//This step is used in case of test failure, 
//if a test fails, it will leave the product in cart, 
//causing an assert on the number of items to fail 
When('I clear the cart', () => {
    homepage.clearCart();
}); 

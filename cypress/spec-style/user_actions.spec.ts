import { assertUrlContains } from "../bdd-style/asserts/generic-asserts";
import { Checkout } from "../page-objects/Checkout";
import { Homepage } from "../page-objects/Homepage";
import { Login } from "../page-objects/Login";
import { RegisterUser } from "../page-objects/RegisterUser";
import { agreePolicy } from "../support/general-methods";
import { CY_ROUTES } from "../support/routes";
const registerUser = new RegisterUser();
const login = new Login();
const homepage = new Homepage();
const checkout = new Checkout();
const addressType = ["new", "existing"];

beforeEach(() => {
    cy.visit('/');
});

describe('Register User', () => {

    it('Navigate to the "Register Account" page and registers the user', () => {
        cy.visit(CY_ROUTES.get('Register Account'));
        registerUser.fillRegistrationForm();
        agreePolicy();
        cy.contains('Continue').click({ force: true });
        assertUrlContains("route=account/success");
    });
});

describe('Login and place order', () => {

    beforeEach(() => {
        cy.visit(CY_ROUTES.get('Login'));
    })

    addressType.forEach((type) => {
        it('Logins and places order', () => {

            login.fillLoginForm();
            login.loginButton();
            assertUrlContains("route=account/account");

            /**
             * This is used in case of test failure, 
             * if a test fails, it will leave the product in cart,
             * causing an assert on the number of items to fail
             */
            homepage.clearCart();

            homepage.searchBox('HTC');
            homepage.getProduct();
            homepage.saveProductDetails();

            cy.intercept('**/index.php?route=*').as('waitForCall');

            assertUrlContains("route=checkout/checkout");
            checkout.fillBillingDetails(type);
            cy.contains('Continue').click({ force: true });
            checkout.compareProductDetails();
            cy.get('[id="button-confirm"]').click();
            assertUrlContains("route=checkout/success");
        });
    });
});

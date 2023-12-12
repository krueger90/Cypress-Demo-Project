import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { assertUrlContains } from "../asserts/generic-asserts";
import { Checkout } from "../../page-objects/Checkout";

const checkout = new Checkout();

Then('I am redirected to the checkout page', () => {
    assertUrlContains("route=checkout/checkout");
});
When('I fill in the required checkout details and use an {string} address', (address: string) => {
    checkout.fillBillingDetails(address);
});
When('Verify if the order is correct', () => {
    checkout.compareProductDetails()
});

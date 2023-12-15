import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { RegisterUser } from "../../page-objects/RegisterUser";
import { assertUrlContains } from "../asserts/generic-asserts";
import { agreePolicy } from "../../support/general-methods";
const registerUser = new RegisterUser();

When('I fill in all the required details', () => {
  cy.waitForNetworkIdle('+(POST|GET)', '*', 800, { log: false });
  registerUser.fillRegistrationForm();
});
When('Agree to the Privacy Policy', () => {
  agreePolicy();
});

Then('the user is registered', () => {
  cy.waitForNetworkIdle('+(POST|GET)', '*', 800, { log: false });
  assertUrlContains("route=account/success");
});

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { RegisterUser } from "../../page-objects/RegisterUser";
import { assertUrlContains } from "../asserts/generic-asserts";
import { agreePolicy } from "../../support/general-methods";
const registerUser = new RegisterUser();

When('I fill in all the required details', () => {
  registerUser.fillRegistrationForm();
});
When('Agree to the Privacy Policy', () => {
  agreePolicy();
});

Then('the user is registered', () => {
  assertUrlContains("route=account/success");
});

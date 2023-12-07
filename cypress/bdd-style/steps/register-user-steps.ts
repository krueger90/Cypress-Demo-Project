import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { RegisterUser } from "../../page-objects/RegisterUser";
import { assertUrlContains } from "../asserts/generic-asserts";
const registerUser = new RegisterUser();

When ('I fill in all the required details', ()=>{
  registerUser.fillRegistrationForm();
})
When('Agree to the Privacy Policy', () => {
  registerUser.agreePolicy();
})

Then('the user is registered', () => {
  assertUrlContains("route=account/success");
})

Then('The user is redirected to the account page', () => {
  assertUrlContains("route=account/account");
})

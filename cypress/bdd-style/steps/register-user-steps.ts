import { When } from "@badeball/cypress-cucumber-preprocessor";
import { RegisterUser } from "../../page-objects/RegisterUser";
const registerUser = new RegisterUser();

When ('I fill in all the required details', ()=>{
  registerUser.fillRegistrationForm();
})
When('Agree to the Privacy Policy', () => {
  registerUser.agreePolicy();
})

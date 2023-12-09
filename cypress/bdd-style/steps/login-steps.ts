import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../../page-objects/Login";

const loginUser = new Login();

When('I fill in the login details', () => {
    loginUser.fillLoginForm();
});

When('I login', () => {
    loginUser.loginButton();
});
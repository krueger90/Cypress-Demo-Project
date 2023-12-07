import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to the SUT', () => {
cy.visit('/');
});

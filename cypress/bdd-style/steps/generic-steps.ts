import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import { CY_ROUTES } from '../../support/routes';

Given('I navigate to the SUT', () => {
    cy.visit('/');
});
When('I navigate to the {string} page', (route: string) => {
    cy.visit(CY_ROUTES.get(route));
});

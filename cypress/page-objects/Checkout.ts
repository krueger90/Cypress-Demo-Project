import { faker } from "@faker-js/faker";
import { agreePolicy } from "../support/general-methods";
import 'cypress-network-idle';

export class Checkout {


    fillBillingDetails(address: string): void {

        cy.waitForNetworkIdle('+(POST|GET)', '*', 500, { log: false });
        if (address === "existing") {
            cy.get('[id=payment-existing]').should('be.visible');
            agreePolicy();
        } else {
            cy.get('[id=input-payment-address-new]').click({ force: true });
            cy.get("[id=input-payment-firstname]").type(faker.person.firstName());
            cy.get("[id=input-payment-lastname]").type(faker.person.lastName());
            cy.get("[id=input-payment-address-1]").type(faker.location.streetAddress());
            cy.get("[id=input-payment-city]").type(faker.location.city());
            cy.get("[id=input-payment-postcode]").type(faker.location.zipCode());
            cy.get("[id=input-payment-country]").select("United Kingdom");
            cy.get("[id=input-payment-zone]").select("Worcestershire");
            agreePolicy();
        }
    }

    compareProductDetails(): void {
        cy.waitForNetworkIdle('+(POST|GET)', '*', 500, { log: false });
        cy.task('getDetails').then(prodDetails => {
            cy.get('tbody tr')
                .find('td')
                .then(tableData => {
                    cy.wrap(tableData).eq(14).should('have.text', prodDetails.productName + " ")
                    cy.wrap(tableData).eq(15).should('have.text', prodDetails.productCode)
                    cy.wrap(tableData).eq(17).should('have.text', prodDetails.productPrice)
                    cy.wrap(tableData).eq(16).should('have.text', prodDetails.productQuantity)
                })
        });

    }
}
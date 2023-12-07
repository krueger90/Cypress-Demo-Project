import { faker } from "@faker-js/faker";
import { generateRandomEmail, generateRandomFirstName, generateRandomLastName, generateRandomPassword, generateRandomPhone } from "../support/faker-helper";

export class RegisterUser {

    fillRegistrationForm(): void {
        let password = generateRandomPassword();

        cy.get('[id=input-firstname]').type(generateRandomFirstName());
        cy.get('[id=input-lastname]').type(generateRandomLastName());
        cy.get('[id=input-email]').type(generateRandomEmail());
        cy.get('[id=input-telephone]').type(generateRandomPhone());
        cy.get('[id=input-password]').type(password);
        cy.get('[id=input-confirm]').type(password);
        this.selectSubscribe();
    }

    private selectSubscribe(): void { 
        cy.get('[type="radio"]').eq(faker.number.int({min:1 ,max:2})).click({force: true});
    };

    agreePolicy(): void {
        cy.get('[id=input-agree]').check({force: true});
    }
}
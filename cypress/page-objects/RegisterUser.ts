import { faker } from "@faker-js/faker";

export class RegisterUser {

    fillRegistrationForm(): void {
        cy.fixture('userData').then(userData => {
            let password = userData[0].password;
            cy.get('[id=input-firstname]').type(userData[0].firstName);
            cy.get('[id=input-lastname]').type(userData[0].lastName);
            cy.get('[id=input-email]').type(userData[0].email);
            cy.get('[id=input-telephone]').type(userData[0].phone);
            cy.get('[id=input-password]').type(password);
            cy.get('[id=input-confirm]').type(password);
        })

        this.selectSubscribe();
    }

    private selectSubscribe(): void {
        cy.get('[type="radio"]').eq(faker.number.int({ min: 1, max: 2 })).click({ force: true });
    };

    agreePolicy(): void {
        cy.get('[id=input-agree]').check({ force: true });
    }
}
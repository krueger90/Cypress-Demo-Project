import { faker } from "@faker-js/faker";

export class RegisterUser {

    fillRegistrationForm(): void {
        cy.fixture('registerUserData').then(registerUserData => {
            let password = registerUserData[0].password;
            cy.get('[id=input-firstname]').type(registerUserData[0].firstName);
            cy.get('[id=input-lastname]').type(registerUserData[0].lastName);
            cy.get('[id=input-email]').type(registerUserData[0].email);
            cy.get('[id=input-telephone]').type(registerUserData[0].phone);
            cy.get('[id=input-password]').type(password);
            cy.get('[id=input-confirm]').type(password);
        })

        this.selectSubscribe();
    }

    private selectSubscribe(): void {
        cy.get('[type="radio"]').eq(faker.number.int({ min: 1, max: 2 })).click({ force: true });
    };
}
export class Login {

    fillLoginForm(): void {
        cy.fixture('userData').then(userData => {
            cy.get("[id=input-email]").type(userData[0].email);
            cy.get("[id=input-password]").type(userData[0].password);
        })
    }

    loginButton(): void {
        cy.get('form').eq(2).submit();
    }
}
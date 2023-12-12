export class Login {

    fillLoginForm(): void {
        cy.fixture('loginUserData').then(loginUserData => {
            cy.get("[id=input-email]").type(loginUserData.email);
            cy.get("[id=input-password]").type(loginUserData.password);
        })
    }

    loginButton(): void {
        cy.get('form').eq(2).submit();
    }
}
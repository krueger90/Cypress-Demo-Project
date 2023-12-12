
export function agreePolicy(): void {
    cy.get('[id=input-agree]').check({ force: true });
}
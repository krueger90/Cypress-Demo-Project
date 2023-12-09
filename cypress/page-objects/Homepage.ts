export class Homepage {

    searchBox(value: string): void{
        cy.get('.flex-fill > input').eq(1).click({force: true}).type(value, {force: true})
    }
}
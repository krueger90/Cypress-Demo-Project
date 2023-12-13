export class Homepage {

    searchBox(value: string): void {
        cy.get('#search :nth-child(1)').eq(5)
            .type(value)
            .get('.type-text').click();
    }

    getProduct(): void {
        cy.get('[data-grid*="product-layout product-grid"]')
            .children()
            .first()
            .click()
            .get('[title="Buy now"]').click();
    }

    /**
     *Creates an object and stores it in the Node process to be retrieved later  
     */
    saveProductDetails() {
        const productDetails = {
            productName: "",
            productCode: "",
            productPrice: "",
            productQuantity: ""
        }

        cy.get('[id="entry_216816"]').invoke('text').then(value => {
            productDetails.productName = value;
        });
        cy.get('[id="entry_216820"] > ul > li > span:nth-child(2)').invoke('text').then(value => {
            productDetails.productCode = value;
        });
        cy.get('[id="entry_216831"] > div > div > h3').invoke('text').then(value => {
            productDetails.productPrice = value;
        });
        cy.get('[id="entry_216841"] > div > input').invoke('val').then(value => {
            productDetails.productQuantity = value.toString();
        });
        cy.task('storeDetails', productDetails);
    }

    clearCart(): void {
        cy.get('#entry_217825 > a > div.cart-icon > span').invoke('text').then(element => {
            if (element.valueOf() != "0") {
                cy.get('[href="#cart-total-drawer"]')
                    .eq(1)
                    .click()
                    .get('#entry_217850 > .icon-right')
                    .click()
                    .get('tbody tr')
                    .find('td').then(tableData => {
                        cy.wrap(tableData).eq(15).get('[title="Remove"]').click();
                    });
            }
        })
    }
}
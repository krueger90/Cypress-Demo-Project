import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Homepage } from "../../page-objects/Homepage";

const homepage = new Homepage();

When('I search for {string} products', (value: string) => {
    cy.waitForNetworkIdle('+(POST|GET)', '*', 800, { log: false });
    homepage.searchBox(value);
});
When('Add a product to cart with Buy Now', () => {
    homepage.getProduct();
    homepage.saveProductDetails();
});

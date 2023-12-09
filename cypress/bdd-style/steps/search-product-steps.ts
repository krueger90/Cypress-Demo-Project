import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Homepage } from "../../page-objects/Homepage";

const homepage = new Homepage();

When('I search for {string} products', (value: string) => {
    homepage.searchBox(value);
})
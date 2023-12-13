const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

const config = {
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    videoCompression: 30,
    retries: {
        runMode: 1,
        openMode: 0
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
};

config.e2e = {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    specPattern: ["cypress/bdd-style/features/**/*.{feature,js}", "cypress/spec-style/**/*.{cy,js,ts,spec}"],
    supportFile: 'cypress/support/e2e.js',
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
        addCucumberPreprocessorPlugin(on, config);

        on("file:preprocessor",
            createBundler({
                plugins: [createEsbuildPlugin(config)],
            })
        );
        //getter and setter for data stored in node process 
        on('task', {
            storeDetails: (value) => {
                return (prodDetails = value)
            },
            getDetails: () => {
                return prodDetails
            }
        })
        return config;
    }
}
module.exports = defineConfig(config);


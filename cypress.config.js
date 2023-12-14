const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

const config = {
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    videoCompression: 30,
    videoUploadOnPasses: false,
    retries: {
        runMode: 1,
        openMode: 0
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: false,
        json: true
    }
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

        on('before:browser:launch', (browser = {}, launchOptions) => {
            launchOptions.args.push('--auto-open-devtools-for-tabs');
            return launchOptions;
        })
        return config;
    }
}
module.exports = defineConfig(config);


const { defineConfig } = require ('cypress');

const webpackPreprocessor= require('@cypress/webpack-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

const config = {
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    videoCompression: 30,
    retries:{
        runMode: 1,
        openMode:0
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000
};

config.e2e = {
    baseUrl: "https://demoqa.com",
    specPattern:["cypress/bdd-style/features/**/*.{feature,js}", "cypress/spec-style/specs/**/*.{js}"],
    supportFile: 'cypress/support/e2e.js',
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
        const options = {
            typescript: resolve.sync('typescript', {basedir: config.projectRoot})
        };
        on('file:preprocessor', cucumber(options));
        on('file:preprocessor', webpackPreprocessor());
    }
};

module.exports = defineConfig(config);


// cypress.config.js
import { defineConfig } from 'cypress';


export default defineConfig({
    projectId: 'cypress-recipes-exercise',
    e2e: {
        baseUrl: 'http://localhost:7071',
        viewportWidth: 1280,
        viewportHeight: 720,
        specPattern: 'cypress/e2e/**/*.cy.js',
        supportFile:  'cypress/support/e2e.js'

    },
});
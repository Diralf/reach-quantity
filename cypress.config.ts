import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl: 'http://localhost:3000',
    specPattern: ['cypress/e2e/**/*.cy.{ts,tsx}', '**/*.feature'],
    userAgent: 'e2e',
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: ['**/*.cy.{ts,tsx}'],
  },
});

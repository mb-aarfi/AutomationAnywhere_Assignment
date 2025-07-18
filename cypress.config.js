const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://community2.cloud-2.automationanywhere.digital",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: 'mochawesome',
});

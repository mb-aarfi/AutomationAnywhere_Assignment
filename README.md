# AutomationAnywhere_Assignment

This project is a Cypress automation framework built using the Page Object Model (POM) pattern. It demonstrates two core use cases for Automation Anywhere’s cloud platform:
- Use Case 1: Create a Message Box Bot and assert its creation.
- Use Case 2: Create a Learning Instance with user-defined fields and assert its creation.

## Demo



https://github.com/user-attachments/assets/70077d96-32b3-4c33-93fd-77a91da634a1



## Project Structure

```
AutomationAnywhere_Assignment/
  └── cypress/
      ├── e2e/           # Test specifications
      ├── fixtures/      # Test data (JSON)
      ├── pages/         # Page Object Models
      └── support/       # Cypress support files
  ├── cypress.config.js  # Cypress configuration
  ├── cypress.env.json   # Environment variables (credentials)
  ├── package.json       # Project dependencies
  └── README.md
```

## Configuration

- **Base URL:**  
  The tests run against: `https://community2.cloud-2.automationanywhere.digital` (set in `cypress.config.js`).

- **Test Data:**  
  Test data such as bot names and messages are stored in `cypress/fixtures/example.json`.

## Folder Details

- **e2e/**: Contains the main test files:
  - `messageBox.cy.js`: Tests Bot creation with a Message Box.
  - `learningInstance.cy.js`: Tests Learning Instance creation.
- **pages/**: Page Object Model files for modular and reusable test code.
- **fixtures/**: Static data for tests.
- **support/**: Custom commands and Cypress support files.

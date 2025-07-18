# AutomationAnywhere_Assignment

This project contains automated end-to-end tests for Automation Anywhere’s cloud platform using [Cypress](https://www.cypress.io/). The tests cover key user flows such as creating a Learning Instance and a Bot with a Message Box, ensuring that core functionalities work as expected.

## Features

- **Learning Instance Test:**  
  Automates the process of logging in, creating a new Learning Instance with user-defined fields, verifying its creation, and logging out.

- **Message Box Bot Test:**  
  Automates logging in, navigating to the bot creator, creating a bot with a message box, verifying the bot’s creation, and logging out.

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

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd AutomationAnywhere_Assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Edit `cypress.env.json` with your Automation Anywhere credentials:
     ```json
     {
       "username": "your-email@example.com",
       "password": "yourPassword"
     }
     ```

### Running the Tests

- **Open Cypress Test Runner:**
  ```bash
  npx cypress open
  ```
  This will launch the Cypress UI where you can run tests interactively.

- **Run tests in headless mode:**
  ```bash
  npx cypress run
  ```

### Reporting

- Test results are generated using the [mochawesome](https://github.com/adamgruber/mochawesome) reporter.
- After running tests, a detailed HTML report will be available in the `cypress/reports` directory (if configured).

## Configuration

- **Base URL:**  
  The tests run against: `https://community2.cloud-2.automationanywhere.digital` (set in `cypress.config.js`).

- **Test Data:**  
  Test data such as bot names and messages are stored in `cypress/fixtures/example.json`.

## Folder Details

- **e2e/**: Contains the main test files:
  - `learningInstance.cy.js`: Tests Learning Instance creation.
  - `messageBox.cy.js`: Tests Bot creation with a Message Box.
- **pages/**: Page Object Model files for modular and reusable test code.
- **fixtures/**: Static data for tests.
- **support/**: Custom commands and Cypress support files.

## Notes

- **Credentials:**  
  Do not commit real credentials to version control. Use environment variables or a `.env` file (and add it to `.gitignore`).

- **Extending Tests:**  
  Add new test cases in the `e2e/` directory and corresponding page objects in `pages/`.

## License

This project is licensed under the ISC License.

---

Let me know if you want to add or customize any section!

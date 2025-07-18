import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import BotPage from "../pages/BotPage";

describe("Message Box Bot Test", () => {
  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("should create a bot with message box", function () {
    LoginPage.login(Cypress.env("username"), Cypress.env("password"));
    HomePage.goToBotCreator();
    BotPage.createMessageBoxBot(this.data.botName, this.data.messageText);
    BotPage.assertBotCreated(this.data.botName);
    HomePage.logout();
  });
});

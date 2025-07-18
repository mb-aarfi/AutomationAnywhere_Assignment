import LoginPage from "../pages/LoginPage";
import LearningInstancePage from "../pages/LearningInstancePage";
import HomePage from "../pages/HomePage";

describe("Learning Instance Test", () => {
  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("should create a learning instance with user-defined fields", function () {
    LoginPage.login(Cypress.env("username"), Cypress.env("password"));
    LearningInstancePage.navigateToAI();
    LearningInstancePage.navigateToDocumentAutomation();
    LearningInstancePage.createLearningInstance();
    LearningInstancePage.assertInstanceCreated("test233");
  });
});

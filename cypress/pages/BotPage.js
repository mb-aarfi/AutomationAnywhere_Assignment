class BotPage {
    createMessageBoxBot(botName) {
        cy.get("input[name='name']").should('be.visible').clear().type(botName);

        cy.contains("Create & edit").click();

        cy.get("input[placeholder='Search actions']").type("Message Box");
        cy.wait(1000); 

        cy.get("span.editor-palette-item__child-label[title='Message box']")
          .find("span.clipped-text__string--for_presentation")
          .should('be.visible')
          .dblclick();

        cy.contains("Enter the message to display").should('be.visible');

        cy.get("div.textinput-cell-input-content[role='textbox'][contenteditable='true'][name='content']", { timeout: 10000 })
          .should('be.visible')
          .type("Test Message", { force: true });

        cy.contains("Save").should('be.visible').click();
        cy.wait(1000); 

        cy.contains("Close").should('be.visible').click();

        cy.contains('span.pathfinder-items__item-label', 'Home')
          .should('be.visible')
          .parent()
          .click();
    }
  
    assertBotCreated(botName) {
      cy.contains(botName).should("exist");
    }
}
  
export default new BotPage();
  
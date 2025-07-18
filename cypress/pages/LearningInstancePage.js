class LearningInstancePage {
    navigateToAI() {
        cy.get('button[aria-label="AI"]').click();
    }

    navigateToDocumentAutomation() {
        cy.get('a[aria-label="Document Automation"]').click();
    }

    assertInstanceCreated(instanceName) {
        cy.contains(instanceName).should("exist");
    }

    createLearningInstance() {
        cy.get('Create Learning Instance', { timeout: 15000 })
          .should('be.visible')
          .click();
        cy.get('input[name="name"]').should('be.visible').type("test233");
        cy.get('.rio-select-input-query__single-selection').click();
        cy.contains('.clipped-text__string--for_presentation', 'User-defined').click();
        cy.contains('button', 'Next').should('be.visible').click();
    }
}

export default new LearningInstancePage();
  
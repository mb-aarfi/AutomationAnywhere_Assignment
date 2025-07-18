class LearningInstancePage {
    createLearningInstance(instanceName, fieldName) {
      cy.contains("Learning").click();
      cy.contains("Add Learning Instance").click();
      cy.get("input[name='instanceName']").type(instanceName);
      cy.contains("Add Field").click();
      cy.get("input[name='fieldName']").type(fieldName);
      cy.contains("Save").click();
    }
  
    assertInstanceCreated(instanceName) {
      cy.contains(instanceName).should("exist");
    }
}
  
export default new LearningInstancePage();
  
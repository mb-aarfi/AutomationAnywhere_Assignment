class HomePage {
    goToBotCreator() {
        cy.contains("Create a bot", { timeout: 10000 }).should('be.visible').click();
    }
  
    logout() {
        cy.wait(2000);
        cy.get('button[name="mysettings"]', { timeout: 10000 }).should('be.visible').click();
        cy.contains('button', 'Log out').should('be.visible').click();
    }
}
  
export default new HomePage();
  
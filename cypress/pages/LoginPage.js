class LoginPage {
    visit() {
      cy.visit("https://community2.cloud-2.automationanywhere.digital/#/login");
    }
  
    fillUsername(username) {
        cy.wait(2000); 
        cy.get("input[name='username']").type(username);
    }
  
    fillPassword(password) {
      cy.get("input[name='password']").type(password);
    }
  
    submit() {
      cy.get("button[type='submit']").click();
    }
  
    login(username, password) {
      this.visit();
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
    }
}
  
export default new LoginPage();
  
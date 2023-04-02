
class loginPage{
      elements = {
            input_email: () => cy.get('#username'),
            input_senha: () => cy.get('#password'),
            btn_login: () => cy.get('#kc-login')

      }
      confirm_login() {
            cy.origin('', () => {
                  cy.get('body').get('#username').type()
                  cy.get('body').get('#password').type()
                  cy.get('body').get('#kc-login').click()
            })  
          }
}

module.exports = new loginPage();
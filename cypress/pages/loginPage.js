
class loginPage{
      elements = {
            input_email: () => cy.get('#username'),
            input_senha: () => cy.get('#password'),
            btn_login: () => cy.get('#kc-login')

      }
      confirm_login() {
            cy.origin('https://sso-dev.yandeh.com.br', () => {
                  cy.get('body').get('#username').type('qayandeh@yandeh.com.br')
                  cy.get('body').get('#password').type('Yandeh@1234')
                  cy.get('body').get('#kc-login').click()
            })  
          }
}

module.exports = new loginPage();
import loginPage from "../pages/loginPage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('que o usuário acesse o portal do YEH', () => {
  cy.visit('https://pix-admin-stg.devyandeh.com.br/ativos');
})

When('que o usuário logue no sistema', () => {
  loginPage.confirm_login();
})

Then('portal é exibido', () => {
  cy.get('#py-container');
})

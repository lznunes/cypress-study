import loginPage from "../pages/HomePage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('acesso o portal', () => {
  cy.visit('/');
  cy.get('i[name="outlined-close"]', { timeout: 20000, retryInterval: 500 }).click()


  cy.get('input[placeholder="Busque por aeroporto"]')
    .eq(0).click()
      .type('GRU {enter}').get('div').get('div')
            .contains('GRU').first()
              .click();

  cy.get('input[placeholder="Busque por aeroporto"]')
    .eq(1).click()
      .type('YUL {enter}').get('div').get('div')
          .contains('YUL').first()
            .click();

  cy.get('input[placeholder="Ida"]').click().type('05/06/2023{enter}');
  cy.get('input[placeholder="Volta"]').click().type('05/07/2023{enter}');
}
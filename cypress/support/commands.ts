// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command -

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    testId(id: string): Chainable<Element>;
    handleCookieBanner(): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add("testId", (id) => cy.get(`[data-testid="${id}"]`));

Cypress.Commands.add("handleCookieBanner", () => {
  cy.get(Cypress.env('COOKIE_BANNER'))
    .then((btn) => btn.trigger('click'));
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

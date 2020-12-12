/// <reference types="cypress" />

import { SMA_USERNAME, SMA_PASSWORD } from '../../credentials';

describe('Visit ennexos.sunnyportal.com', () => {
  const username = SMA_USERNAME;
  const password = SMA_PASSWORD;

  beforeEach(() => {
    cy.visit('https://ennexos.sunnyportal.com');
  });

  it('redirects to /dashboard on success', () => {
    cy.url().should('include', '/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('form').submit();

    cy.url().should('include', '/dashboard');
    cy.get('h1').should('contain', 'Dashboard');

    cy.get('#current-user-dropdown-menu').click();
    cy.get('button.sma-logout').click();
  });
});

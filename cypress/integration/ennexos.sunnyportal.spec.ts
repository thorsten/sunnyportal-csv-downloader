/// <reference types="cypress" />

import { SMA_USERNAME, SMA_PASSWORD, SMA_PLANT_ID } from '../../credentials';

describe('Visit ennexos.sunnyportal.com', () => {
  const username = SMA_USERNAME;
  const password = SMA_PASSWORD;
  const plantId = SMA_PLANT_ID

  beforeEach(() => {
    cy.visit('https://ennexos.sunnyportal.com');
  });

  it('redirects to /dashboard on success', () => {

    // Login
    cy.url().should('include', '/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('form').submit();

    // Got to Dashboard
    cy.url().should('include', `${plantId}/dashboard`);
    cy.get('h1').should('contain', 'Dashboard');

    // Click on Monitoring
    cy.get('#ennexos-element-monitoring').click();
    cy.get('a[href*="monitoring/view-energy-balance"]').click()

    // Select "Details" and click on "Download" button
    cy.get('span.ennexos-accordion-text').contains('Details').click();
    cy.get('button.btn.ennexos-button').click();

    // Confirm download
    cy.get('button.btn.ennexos-button-blue').click();

    // Logout
    cy.get('#current-user-dropdown-menu').click();
    cy.get('button.sma-logout').click();
  });
});

/// <reference types="cypress" />

import { SMA_USERNAME, SMA_PASSWORD, SMA_PLANT_ID } from '../../credentials';
import { DashboardPage } from '../page-models/dashboard.page';
import { NavigationModel } from '../page-models/navigation.model';
import { EnergyBalancePage } from '../page-models/energy-balance.page';
import { LoginPage } from '../page-models/login.page';

describe('Visit ennexos.sunnyportal.com', () => {
  const username = SMA_USERNAME;
  const password = SMA_PASSWORD;
  const plantIdOrArray = SMA_PLANT_ID;

  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));

    cy.get('#onetrust-accept-btn-handler').then((btn) => btn.trigger('click'));
  });

  it('redirects to /dashboard on success', () => {
    // Login
    cy.url().should('include', '/login');

    new LoginPage().login({ username, password });

    cy.url().should('include', '/dashboard');

    const nav = new NavigationModel();

    if (Array.isArray(plantIdOrArray)) {
      plantIdOrArray.forEach((plantId) => {
        const dashboard = new DashboardPage(plantId);
        dashboard.navigate(nav);
        new EnergyBalancePage().downloadCsv();
      });
    } else {
      const dashboard = new DashboardPage(plantIdOrArray);
      dashboard.navigate(nav);
      new EnergyBalancePage().downloadCsv();
    }


    // Logout
    cy.testId('current-user-dropdown-menu').click();
    cy.testId('sma-logout').click();
  });
});

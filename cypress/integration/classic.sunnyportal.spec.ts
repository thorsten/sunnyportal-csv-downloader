
import { SMA_USERNAME, SMA_PASSWORD } from '../../credentials';

describe('Visit www.sunnyportal.com', () => {
  const username = SMA_USERNAME;
  const password = SMA_PASSWORD;

  beforeEach(() => {
    cy.visit('https://www.sunnyportal.com');
  });

  it('redirects to /dashboard on success', () => {
    cy.get('input#txtUserName').type(username);
    cy.get('input#txtPassword').type(password);
    cy.get('input[type=submit]').click();

    cy.url().should('include', '/Plants');
    cy.get('h2').should('contain', 'Anlagenliste');

    cy.get('li.user > a').click();
    cy.get('li.logout > a').click();
  });
});

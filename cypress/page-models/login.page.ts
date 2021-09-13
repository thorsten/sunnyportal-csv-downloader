import { Credentials } from '../models/credentials';

export class LoginPage {

  public login(credentials: Credentials): void {
    const { username, password } = credentials;
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('form').submit();
  }
}
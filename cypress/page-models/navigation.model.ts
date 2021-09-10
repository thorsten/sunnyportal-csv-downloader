
export class NavigationModel {

  public navigateTo(plantId: string): void {
    cy.visit(`${Cypress.env('BASE_URL')}${plantId}/dashboard`);
  }

}

export class NavigationModel {

  public navigateTo(plantId: number): void {
    cy.visit(`${Cypress.env('BASE_URL')}${plantId}/dashboard`);
  }

}
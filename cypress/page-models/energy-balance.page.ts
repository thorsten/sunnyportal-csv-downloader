
export class EnergyBalancePage {

  public downloadCsv(): void {
    // Select "Details" and click on "Download" button
    cy.get('span.ennexos-accordion-text').contains('Details').trigger('click');
    cy.get('button.btn.ennexos-button').trigger('click');

    // Confirm download
    cy.get('button.btn.ennexos-button-blue').click();
  }

}
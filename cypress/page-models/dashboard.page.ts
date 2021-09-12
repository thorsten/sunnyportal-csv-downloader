import { NavigationModel } from './navigation.model';

export class DashboardPage {

  constructor(private plantId: number) {}

  public navigate(navigation: NavigationModel): void {
    navigation.navigateTo(this.plantId);
    cy.url().should('include', `${this.plantId}/dashboard`);
    cy.testId('EnergyBalance').parent().find('.sma-widget-with-link').trigger('click');
  }

}
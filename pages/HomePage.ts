import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStartedButton: Locator;
  readonly mainHeading: Locator;
  readonly residentialNav: Locator;
  readonly residentialOverviewLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getStartedButton = page.getByRole('link', { name: 'Get Started' });

    this.mainHeading = page.getByRole('heading', {
      name: 'Leading the way with our complete energy solutions for a sustainable future.',
    });

    this.residentialNav = page
  .getByRole('navigation', { name: 'Menu' })
  .getByRole('link', { name: 'Residential', exact: true });
 
    this.residentialOverviewLink = page
    .getByRole('navigation', { name: 'Menu'})
    .locator('a[href*="complete-energy-solutions/overview"]', { hasText: 'Overview' });

  }

  async goto() {
    await this.page.goto('/');
  }

  async clickGetStartedButton() {
    await this.getStartedButton.click();
    
  }

  async openResidentialOverview() {
    await this.residentialNav.hover();
    await this.residentialOverviewLink.evaluate((el) => (el as HTMLElement).click());
  
  }
}

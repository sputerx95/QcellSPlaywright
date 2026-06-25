import { Page, Locator } from '@playwright/test';

export class GetStartedPage {
  readonly page: Page;
  readonly iAmAHomeownerButton: Locator;
  readonly iAmAnInstallerButton: Locator;
  readonly iAmInterestedInCommercialButton: Locator;
  readonly iAmInterestedInUtilityButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.iAmAHomeownerButton = page.getByRole('link', { name: 'I am a Homeowner' });
    this.iAmAnInstallerButton = page.getByRole('link', { name: "I'm an Installer" });
    this.iAmInterestedInCommercialButton = page.getByRole('link', {
      name: "I'm interested in Commercial & Industrial",
    });
    this.iAmInterestedInUtilityButton = page.getByRole('link', {
      name: "I'm interested in Utility Solutions",
    });
  }
}

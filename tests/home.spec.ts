import { test, expect} from '@playwright/test';

import { HomePage } from '../pages/HomePage';

import { GetStartedPage } from '../pages/GetStartedPage';

test('Homepage loads with main heading', async ({ page }) => {



    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(homePage.mainHeading).toBeVisible();

});

test('Get Started button is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(homePage.getStartedButton).toBeVisible();
});


test('Residential Overview is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.openResidentialOverview();
    await expect(page).toHaveURL(/complete-energy-solutions\/overview/);
});



test('Get Started navigates to get-started page', async ({page}) => {

    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.clickGetStartedButton();

    await expect(page).toHaveURL(/get-started/i);
});

test('Get Started navigates to "I am a Homeonwer page"', async ({page}) => {
    
    const homePage = new HomePage(page);
    const getStartedPage = new GetStartedPage(page);

    await homePage.goto();

    await homePage.clickGetStartedButton();

    await expect(page).toHaveURL(/get-started/i);

    await getStartedPage.iAmAHomeownerButton.click();

    await expect(page).toHaveURL(/get-started\/get-started-homeowner/i);

});

test('Get Started navigates to "I am an Installer page"', async ({page}) => {

    const homePage = new HomePage(page);
    const getStaretedPage = new GetStartedPage(page);

    await homePage.goto();

    await homePage.clickGetStartedButton();

    await expect(page).toHaveURL(/get-started/i);

    await getStaretedPage.iAmAnInstallerButton.click();

    await expect(page).toHaveURL(/get-started-residential-installer/i);
});

test('Get Started navigates to "I am Commercial & Industrial page"', async ({page}) => {

    const homePage = new HomePage(page);
    const getStaretedPage = new GetStartedPage(page);

    await homePage.goto();

    await homePage.clickGetStartedButton();

    await expect(page).toHaveURL(/get-started/i);

    await getStaretedPage.iAmInterestedInCommercialButton.click();

    await expect(page).toHaveURL(/get-started-commercial-industrial/i);
});

test("I'm interested in Utility Solutions page", async ({page}) => {

    const homePage = new HomePage(page);
    const getStaretedPage = new GetStartedPage(page);

    await homePage.goto();

    await homePage.clickGetStartedButton();

    await expect(page).toHaveURL(/get-started/i);

    await getStaretedPage.iAmInterestedInUtilityButton.click();

    await expect(page).toHaveURL(/get-started-utility/i);
});


import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test.describe("Test to playwright's documentation", async () => {
  test('Perform a search with no results', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);

    const getStarted = page.getByRole('link', { name: 'Get started' });
    await getStarted.click();

    await page.getByRole('button', { name: 'Search' }).click();
    const input = page.locator('#docsearch-input');
    await input.type('getByAlt', { delay: 100 });
    await input.press('Enter');

    const headingTitle = page.getByRole('heading', { name: 'getByAltText' });
    await expect(headingTitle).toBeVisible();
  });
});

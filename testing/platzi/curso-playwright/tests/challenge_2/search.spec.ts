import { test, expect, Locator } from '@playwright/test';

let searchBox: Locator;

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search' }).click();
  searchBox = await page.getByPlaceholder('Search docs');
  await searchBox.click();
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test.describe("Test to playwright's documentation", async () => {
  test('Perform a search with no results', async ({ page }) => {
    await searchBox.fill('hascontent');

    const noResults = page.locator('.DocSearch-NoResults p');
    await expect(noResults).toBeVisible();
    await expect(noResults).toHaveText('No results for "hascontent"');
  });

  test('Clean the search input', async ({ page }) => {
    await searchBox.fill('somerandomtext');
    const searchText = await page.locator('.DocSearch-Title > strong');
    await expect(searchBox).toHaveAttribute('value', 'somerandomtext');
    await expect(searchText).toHaveText('somerandomtext');

    await page.getByRole('button', { name: 'Clear the query' }).click();
    await expect(searchBox).toHaveAttribute('value', '');
  });

  test('Perform a search that generates at least one result', async ({
    page,
  }) => {
    await searchBox.fill('havetext');
    expect(searchBox).toHaveAttribute('value', 'havetext');

    // Verity there are sections in the results
    const docSearchContainer = page.locator(
      '.DocSearch-Dropdown-Container section'
    );
    await docSearchContainer.nth(1).waitFor();
    const numberOfResults = await docSearchContainer.count();
    expect(numberOfResults).toBeGreaterThan(0);
  });
});

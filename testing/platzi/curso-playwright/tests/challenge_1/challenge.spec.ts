import { test, expect } from '@playwright/test';

test('Testing app', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  const cardOverlay = page.locator('#cartModal + .col-sm-4 .product-overlay');

  const cardOverlayDisplay = await cardOverlay.evaluate(
    (e) => window.getComputedStyle(e as HTMLDivElement).display
  );
  await expect(cardOverlayDisplay).toBe('block');

  const details = page.locator(
    'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.choose > ul > li > a'
  );

  await details.click();

  // close ad
  if (page.url() === 'https://automationexercise.com/#google_vignette') {
    await page.goto('https://automationexercise.com/product_details/1');
  }

  const title = page.getByText('Blue Top');
  await expect(title).toHaveText('Blue Top');

  const input = page.locator('#quantity');
  await expect(input).toHaveCount(1);

  const addToCart = await page.waitForSelector(
    'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > button'
  );
  await addToCart.click();

  const modal = page.locator('#cartModal');
  const added = modal.locator('.modal-title');
  await expect(modal).toBeVisible();
  await expect(added).toContainText('Added!');

  await page.click('#cartModal > div > div > div.modal-footer > button');

  await expect(modal).not.toBeVisible();
});

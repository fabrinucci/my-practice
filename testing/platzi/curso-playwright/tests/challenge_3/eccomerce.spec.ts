import { test, expect, Locator } from '@playwright/test';

let searchBox: Locator;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test.describe('Test e-commerce', async () => {
  test.only('Nav between slides', async ({ page }) => {
    const prevBtn = page
      .locator('#carouselExampleIndicators')
      .getByRole('button', { name: 'Previous' });

    const nextBtn = page
      .locator('#carouselExampleIndicators')
      .getByRole('button', { name: 'Next' });

    await page.getByRole('img', { name: 'First slide' }).click();
    await expect(
      page.locator('.carousel-item').getByRole('img')
    ).toHaveAttribute('alt', 'First slide');

    await nextBtn.click();

    await expect(
      page.locator('.carousel-item').getByRole('img')
    ).toHaveAttribute('alt', 'Second slide');

    // // nav using buttons

    // await page.getByRole('img', { name: 'Third slide' }).click();
    // await nextBtn.click();
    // await nextBtn.click();

    // await expect(page.getByRole('img')).toHaveAttribute('alt', 'First slide');

    // await prevBtn.click();

    // await page.getByRole('img', { name: 'First slide' }).click();
  });
});

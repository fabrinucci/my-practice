import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('img', { name: 'First slide' }).click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Next' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Next' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Next' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Next' })
    .click();
  await page.getByRole('img', { name: 'Second slide' }).click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Previous' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Previous' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Previous' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Previous' })
    .click();
  await page
    .locator('#carouselExampleIndicators')
    .getByRole('button', { name: 'Previous' })
    .click();
  await page.getByRole('img', { name: 'Third slide' }).click();
  await page.getByRole('img', { name: 'Third slide' }).click();
});

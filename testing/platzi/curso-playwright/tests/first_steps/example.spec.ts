import { test, expect } from '@playwright/test';

test('test clicks ', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Click' }).click();
  await page
    .getByRole('button', { name: 'Button That Ignores DOM Click Event' })
    .click();

  await page.locator(".nav-link:has-text('Resources')").click();
  await page.locator('#title');

  await page.getByRole('link', { name: 'Home' }).click();
  await page.click(
    '#overview > div > div:nth-child(1) > div:nth-child(3) > h3 > a'
  );
  await page.locator('#greenButton').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Verify Text' }).click();
  await page.locator('.bg-primary').click();
  // await page.getByText("UserName", { exact: true }).click();
  await page.click('text=UserName');
  await page.getByRole('link', { name: 'Resources' }).click();
});

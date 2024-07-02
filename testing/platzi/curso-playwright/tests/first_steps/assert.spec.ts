import { test, expect } from '@playwright/test';

test('assert test ', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');

  const input = page.locator('#newButtonName');
  await expect(input).toBeVisible();
  await input.fill('Change button name');
  const button = page.locator('#updatingButton');
  await button.click();

  await expect(button).toContainText('Change button name');
});

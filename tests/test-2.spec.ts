import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://10.38.26.102:3000/PrimaryCare');

  // Clicking on an element with the text 'WHAT does a primary care visit look like?+'
  await page.locator('text=WHAT does a primary care visit look like?+').click();

  // Clicking on an element within the image wrapper (assuming it's the third child)
  await page.locator('.image-wrapper > div:nth-child(3)').click();

  // Expecting the presence of text 'Your PCP will track things'
  await expect(page.locator('text=Your PCP will track things')).toBeVisible();
});
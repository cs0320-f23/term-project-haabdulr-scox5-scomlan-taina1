import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.38.26.102:3000/');
  await page.locator('.sc-bZQynM > button:nth-child(3)').click();
  await page.locator('.sc-bZQynM > button:nth-child(3)').click();
  await page.locator('.sc-bZQynM > button:nth-child(3)').click();
  await page.getByLabel('Close').click();
  await page.getByRole('link', { name: 'Types of Care Primary Care' }).click();
  await page.getByRole('link', { name: 'Primary Care', exact: true }).click();
});
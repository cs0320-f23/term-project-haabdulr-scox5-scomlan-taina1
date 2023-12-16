import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('.sc-bZQynM > button:nth-child(3)').click();
  await page.locator('.sc-bZQynM > button:nth-child(3)').click();
  await page.locator('.sc-bZQynM > button:nth-child(3)').click();
  await page.getByRole('link', { name: 'Primary Care', exact: true }).click();
  await page.getByText('WHAT does a primary care').click();
  await page.locator('.image-wrapper > div:nth-child(3)').click();
  await page.locator('.image-wrapper > div:nth-child(4)').click();
  await page.locator('.image-wrapper > div:nth-child(5)').click();
  await page.locator('.highlighted-areas').first().click();
  await expect(page.getByText('At each visit, your PCP will').click());
});
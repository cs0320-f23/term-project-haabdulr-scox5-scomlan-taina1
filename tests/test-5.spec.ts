import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://10.38.26.102:3000/MentalHealth');

//   // Clicking on a link with the text 'Mental Health'
//   await page.locator('a:has-text("Mental Health")').click();

//   // Waiting for the page to load or for the heading to become visible
//   // await page.waitForSelector('h2:has-text("Mental Health")');

//   // Checking if a heading with the text 'Mental Health' is either visible or hidden
//   const headingLocator = page.locator('h2:has-text("Mental Health")');
//   const isVisible = await headingLocator.isVisible();

//   // Asserting that the heading is either visible or hidden as expected
//   await expect(isVisible).toBe(false);
// });

import { test, expect } from '@playwright/test';

// npx jest src/components/feedbackBox.tsx


test('Feedback form interaction', async ({ page }) => {
  // Navigate to your application
  await page.goto('http://localhost:3000/');

  // Interact with the feedback form
  await page.fill('#input-text', ''); // Providing an empty feedback to trigger validation error
  await page.click('input[type="submit"]');

  // Wait for the error message to appear
  await page.waitForSelector('.error-message', { timeout: 5000 });

  // Check if the error message is displayed
  const errorMessage = await page.textContent('.error-message');
  expect(errorMessage).toBe('Feedback cannot be empty');

  // Interact with the feedback form with valid input
  await page.fill('#input-text', 'This is a test feedback');
  await page.click('input[type="submit"]');

  // Wait for the feedback submission (assuming there's some visual indicator)
  await page.waitForSelector('.submission-success', { timeout: 5000 });

  // Check if the submission was successful
  const successMessage = await page.textContent('.submission-success');
  expect(successMessage).toBe('Feedback submitted successfully');
});

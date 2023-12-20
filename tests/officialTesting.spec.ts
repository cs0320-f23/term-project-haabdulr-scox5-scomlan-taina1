import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://localhost:3000/');
  await page.waitForLoadState('load'); // Wait for the page to load completely


  // presence of the logo
  const logo = page.locator('.logo img');
  await expect(logo).toBeVisible();

  const homeLink = page.locator('nav .link[href="/"]');
  await expect(homeLink).toHaveText('Home');

  // Navigate to the "Types of Care" dropdown and click on "Primary Care"
  const typesOfCareDropdown = page.locator('.link.with-dropdown');
  await typesOfCareDropdown.click();
  const primaryCareLink = page.locator('.dropdown-content a[href="/PrimaryCare"]');
  await primaryCareLink.click();

  // presence of the "Primary Care" heading on the page
  const primaryCareHeading = page.locator('h1:has-text("Primary Care")');
  await expect(primaryCareHeading).toBeVisible();

  // Navigate to the "Mental Health" page
  const mentalHealthLink = page.locator('nav .link[href="/MentalHealth"]');
  await mentalHealthLink.click();

  // presence of the "Mental Health" heading on the page
  const mentalHealthHeading = page.locator('h1:has-text("Mental Health")');
  await expect(mentalHealthHeading).toBeVisible();
});


test('Navigate and interact with the app', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://localhost:3000/');
  await page.waitForNavigation(); // Wait for navigation to complete


  // presence of important elements on the home page
  const appTitle = page.locator('#app-title');
  await expect(appTitle).toHaveText('Your Healthcare Inside + Out');

  // navigation to Types of Care page
  const typesOfCareLink = page.locator('a:has-text("Types of Care")');

  const primaryCareTitle = page.locator('#title-description');
  await expect(primaryCareTitle).toHaveText("Navigating your way through Rhode Island’s healthcare system");
});

test('primary care', async ({ page }) => {
  await page.goto('http://10.38.26.102:3000/PrimaryCare');
  await page.waitForLoadState('load'); // Wait for the page to load completely


  // Clicking on an element with the text 'WHAT does a primary care visit look like?+'
  await page.locator('text=WHAT does a primary care visit look like?+').click();

  // Clicking on an element within the image wrapper (assuming it's the third child)
  await page.locator('.image-wrapper > div:nth-child(3)').click();

  // Expecting the presence of text 'Your PCP will track things'
  await expect(page.locator('text=Your PCP will track things')).toBeVisible();
});


test('Feedback Box Interaction', async ({ page }) => {
  await page.goto('http://localhost:3000/'); 
  await page.waitForLoadState('load'); // Wait for the page to load completely


  const feedbackTextarea = page.locator('#input-text');

  await feedbackTextarea.type('This is a test feedback.');

  await page.locator('#feedback-form').evaluate((form) => form.submit());

  await page.waitForTimeout(1000);

  const updatedFeedbackValue = await feedbackTextarea.evaluate((textarea) => textarea.value);
  expect(updatedFeedbackValue).toBe('');

  // Check for any error messages
  const errorMessageVisible = await page.isVisible('.error-message');
  expect(errorMessageVisible).toBe(false); 
});



test('Submit Empty Feedback', async ({ page }) => {
  // Navigate to the page containing the Feedback component
  await page.goto('http://localhost:3000/'); // Update the URL as needed
  await page.waitForLoadState('load'); // Wait for the page to load completely


  // Locate the feedback submit button
  const submitButton = page.locator('#feedback-form input[type="submit"]');

  // Click the submit button without entering any feedback
  await submitButton.click();

  // Check if the error message is displayed
  const errorMessageVisible = await page.isVisible('.error-message');
  expect(errorMessageVisible).toBe(true);

  // Check if the feedback textarea value remains empty
  const feedbackTextarea = page.locator('#input-text');
  const feedbackValue = await feedbackTextarea.evaluate((textarea) => textarea.value);
  expect(feedbackValue).toBe('');
});



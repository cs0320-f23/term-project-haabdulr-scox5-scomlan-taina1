import { test, expect } from '@playwright/test';

test('Navigate and interact with the app', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://localhost:3000/');

  // Verify the presence of important elements on the home page
  const appTitle = page.locator('#app-title');
  await expect(appTitle).toHaveText('Your Healthcare Inside + Out');

  // Test navigation to Types of Care page
  const typesOfCareLink = page.locator('a:has-text("Types of Care")');
  // await typesOfCareLink.hover();

  // // Hover on "Types of Care" and then click on "Primary Care"
  // const primaryCareLink = page.locator('a:has-text("Primary Care"):nth-child(2)'); // Adjust the index as needed
  // await primaryCareLink.click({ timeout: 5000 }); // Increase the timeout as needed

  // Now, you can assert elements on the "Primary Care" page if needed
  const primaryCareTitle = page.locator('#title-description');
  await expect(primaryCareTitle).toHaveText("Navigating your way through Rhode Island’s healthcare system");
});

test('Test Mental Health page', async ({ page }) => {
  await page.goto('http://10.38.26.102:3000/MentalHealth');

  // Clicking on a link with the text 'Mental Health'
  await page.locator('a:has-text("Mental Health")').click();

  // Waiting for the page to load or for the heading to become visible
  // await page.waitForSelector('h2:has-text("Mental Health")');

  // Checking if a heading with the text 'Mental Health' is either visible or hidden
  const headingLocator = page.locator('h2:has-text("Mental Health")');
  const isVisible = await headingLocator.isVisible();

  // Asserting that the heading is either visible or hidden as expected
  await expect(isVisible).toBe(false);
});

test('test', async ({ page }) => {
  await page.goto('http://10.38.26.102:3000/PrimaryCare');

  // Clicking on an element with the text 'WHAT does a primary care visit look like?+'
  await page.locator('text=WHAT does a primary care visit look like?+').click();

  // Clicking on an element within the image wrapper (assuming it's the third child)
  await page.locator('.image-wrapper > div:nth-child(3)').click();

  // Expecting the presence of text 'Your PCP will track things'
  await expect(page.locator('text=Your PCP will track things')).toBeVisible();
});



  // // Test navigation to Urgent Care page
  // const urgentCareLink = page.locator('a:has-text("Urgent Care")');
  // await urgentCareLink.click();
  // const urgentCareTitle = page.locator('#title');
  // await expect(urgentCareTitle).toHaveText('Urgent Care');

  // // Test navigation to Mental Health page
  // const mentalHealthLink = page.locator('a:has-text("Mental Health")');
  // await mentalHealthLink.click();
  // const mentalHealthTitle = page.locator('#title');
  // await expect(mentalHealthTitle).toHaveText('Mental Health');

  // // Test navigation to Medical Records page
  // const medicalRecordsLink = page.locator('a:has-text("Medical Records")');
  // await medicalRecordsLink.click();
  // const medicalRecordsTitle = page.locator('#title');
  // await expect(medicalRecordsTitle).toHaveText('Medical Records');

  // // Test navigation to Prescription Medication page
  // const prescriptionMedicationLink = page.locator('a:has-text("Prescription Medication")');
  // await prescriptionMedicationLink.click();
  // const prescriptionMedicationTitle = page.locator('#title');
  // await expect(prescriptionMedicationTitle).toHaveText('Prescription Medication');

  // // Test navigation to Log In page
  // const loginLink = page.locator('a:has-text("Log In")');
  // await loginLink.click();
  // const loginTitle = page.locator('#title');
  // await expect(loginTitle).toHaveText('Log In');

  // // Test navigation to Sign Up page
  // const signUpLink = page.locator('a:has-text("Sign Up")');
  // await signUpLink.click();
  // const signUpTitle = page.locator('#title');
  // await expect(signUpTitle).toHaveText('Sign Up');


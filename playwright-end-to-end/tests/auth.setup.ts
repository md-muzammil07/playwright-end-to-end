import { test as setup, expect } from '@playwright/test';
import path from 'path';

// const authFile = path.join(__dirname, 'playwright-end-to-end/.auth/user.json');

setup('authenticate', async ({page}) => {
    
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://letcode.in/signin');
  await page.locator('input[name="email"]').fill('koushik350@gmail.com');
  await page.fill('input[name="password"]', 'Pass123$')
  await page.click('//button[normalize-space(text())="LOGIN"]')
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
//   await page.waitForURL('https://github.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
//   await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

await expect(page.locator('//h1[normalize-space(text())="LetCode with Koushik"]')).toContainText('LetCode with Koushik')

  // End of authentication steps.

  await page.context().storageState({ path: 'user.json' });
});


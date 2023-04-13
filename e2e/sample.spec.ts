import { expect, test } from '@playwright/test';

test('Playwright test', async ({ page }) => {
  await page.goto('https://www.example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

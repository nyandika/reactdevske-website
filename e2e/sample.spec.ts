import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Playwright test', async ({ page }) => {
  const title = await page.title();
  console.log('---------------------------Test log--------------');
  console.log(title);
  console.log('---------------------------Test log--------------');
  await expect(page).toHaveTitle(/Reactjs Developer Community in Kenya/);
});

test('should show the title', async ({ page }) => {
  console.log('---------------------------Test log title--------------');
  // console.log(title);
  // console.log('---------------------------Test log--------------');
  await expect(
    page.getByRole('heading', { name: 'React Developer Community Kenya' })
  ).toBeVisible();
});

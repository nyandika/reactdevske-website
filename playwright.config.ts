import type { PlaywrightTestConfig } from '@playwright/test';

const port = 3000;
const baseURL = `http://localhost:${port}`;

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  retries: 2,
  workers: 3,
  reporter: process.env.CI ? [['github'], ['list'], ['html']] : 'list',
  use: {
    baseURL: baseURL,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
    },

    {
      name: 'firefox',
    },

    {
      name: 'webkit',
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    port: port,
    // url:baseURL,
    // timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;

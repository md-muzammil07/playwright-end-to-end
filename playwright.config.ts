import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import path from 'path'
import { AllureReporter } from 'allure-playwright'
import dotenv from 'dotenv'
dotenv.config()

const config: PlaywrightTestConfig = {
  testDir: './playwright-end-to-end',
  retries: 1,
  use: {
    // storageState: 'combinedStorageState.json',
    channel: 'chrome',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'off',
    // contextOptions: { recordVideo: { dir: 'playwright-result/videos/' } },
    launchOptions: {
      // slowMo: 1000
    }
  },
  timeout: 600 * 1000,
  expect: {
    timeout: 60000
  },
  fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  workers: 1,
  reporter: [
    ['json', { outputFile: 'playwright-result/test-results.json' }],
    [
      'allure-playwright',
      {
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],
    projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
}

export default config
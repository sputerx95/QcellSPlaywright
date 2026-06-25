import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://us.qcells.com',
    screenshot: 'only-on-failure',

    viewport: { width: 1920, height: 1080 },
  },
  
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});

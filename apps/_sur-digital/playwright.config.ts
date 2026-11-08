import { defineConfig } from '@playwright/test';

/**
 * E2E del sitio servido en local: enrutado del proxy de clientes, señales SEO
 * que genera (canonical propio, og:url, sin noindex) y enlaces del portfolio.
 *
 * Usa el Chrome instalado en la máquina (`channel: 'chrome'`) para no depender
 * de la descarga de navegadores de Playwright.
 */
const PORT = 4321;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.e2e.ts',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  // El proxy pide webs externas: mejor en serie y con un solo worker.
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL,
    channel: 'chrome',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: `bun run dev --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

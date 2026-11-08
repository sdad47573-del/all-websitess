import { expect, test } from '@playwright/test';

test.describe('sitio público', () => {
  test('la home responde y se pinta', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    expect(await page.title()).toMatch(/Málaga/i);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('el portfolio enlaza a las webs de clientes por el proxy', async ({ page }) => {
    const response = await page.goto('/clientes/');
    expect(response?.status()).toBe(200);

    const cards = page.locator('a[class*="group flex flex-1 flex-col"]');
    await expect(cards.first()).toBeVisible();

    const hrefs = await cards.evaluateAll((links) =>
      links.map((link) => link.getAttribute('href') ?? ''),
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(90);
    for (const href of hrefs) {
      // Ninguna tarjeta debe salir a un despliegue externo.
      expect(href).toMatch(/^\/[a-z0-9-]+\/$/);
    }
    expect(hrefs).toContain('/1111-coffee-and-bakery/');
  });

  test('robots.txt permite el proxy y anuncia el sitemap', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('Sitemap: https://www.sur-digital.com/sitemap-index.xml');
    expect(body).not.toMatch(/^Disallow: \/$/m);
    expect(body).not.toMatch(/^Disallow: \/1111/m);
  });
});

import { expect, test } from '@playwright/test';

const SLUG = '1111-coffee-and-bakery';
const SITE = 'https://www.sur-digital.com';

test.describe('proxy de webs de clientes', () => {
  test('sirve la web con canonical propio y sin noindex', async ({ page, request }) => {
    const response = await page.goto(`/${SLUG}/`);
    expect(response?.status()).toBe(200);
    expect(new URL(page.url()).pathname).toBe(`/${SLUG}/`);
    await expect(page.locator('body')).toContainText(/coffee/i);

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe(`${SITE}/${SLUG}/`);
    expect(await page.locator('meta[property="og:url"]').getAttribute('content')).toBe(canonical);

    // La ficha estructurada también declara la URL de sur-digital.com.
    const structured = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(structured.join('\n')).toContain(`${SITE}/${SLUG}/`);

    const head = await request.head(`/${SLUG}/`);
    expect(head.status()).toBe(200);
    expect(head.headers()['x-robots-tag']).toBeUndefined();
  });

  test('las subpáginas y sus enlaces siguen en sur-digital.com', async ({ page }) => {
    const response = await page.goto('/a-jalar/aviso-legal/');
    expect(response?.status()).toBe(200);
    expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
      `${SITE}/a-jalar/aviso-legal/`,
    );

    const internal = await page.locator('a[href^="/"]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href') ?? ''),
    );
    expect(internal.length).toBeGreaterThan(0);
    for (const href of internal) {
      expect(href.startsWith('/a-jalar/')).toBe(true);
    }
  });

  test('la barra final no provoca un bucle de redirecciones', async ({ request }) => {
    const response = await request.get('/a-jalar/aviso-legal', { maxRedirects: 5 });
    expect(response.status()).toBe(200);
  });

  test('un slug desconocido devuelve el 404 del sitio', async ({ page }) => {
    const response = await page.goto('/no-existe-xyz');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

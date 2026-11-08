import { expect, test } from '@playwright/test';

const SITE = 'https://www.sur-digital.com';

const canonicalDe = (html: string) => {
  const tag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0] ?? '';
  return tag.match(/href=["']([^"']+)["']/i)?.[1] ?? '';
};

const PAGINAS = [
  '/',
  '/precios/',
  '/servicios/',
  '/especialidades/',
  '/clientes/',
  '/blog/',
  '/aviso-legal/',
  '/politica-privacidad/',
  '/web-design-marbella/',
  '/contacto/',
];

test.describe('páginas del sitio', () => {
  for (const ruta of PAGINAS) {
    test(`${ruta} responde 200 y declara canonical propio`, async ({ request }) => {
      const response = await request.get(ruta);
      expect(response.status()).toBe(200);

      const html = await response.text();
      expect(html).toMatch(/<title>[^<]+<\/title>/i);
      expect(canonicalDe(html)).toMatch(new RegExp(`^${SITE}/`));
    });
  }

  test('el blog enlaza posts que cargan', async ({ request }) => {
    const index = await request.get('/blog/');
    expect(index.status()).toBe(200);

    const html = await index.text();
    const posts = [...new Set(html.match(/href="(\/blog\/[a-z0-9-]+\/)"/g) ?? [])].slice(0, 3);
    expect(posts.length).toBeGreaterThan(0);

    for (const match of posts) {
      const ruta = match.replace(/^href="|"$/g, '');
      const post = await request.get(ruta);
      expect(post.status(), ruta).toBe(200);
    }
  });

  test('los enlaces internos de la home no dan 404', async ({ request }) => {
    const home = await request.get('/');
    expect(home.status()).toBe(200);

    const html = await home.text();
    const rutas = [
      ...new Set(
        [...html.matchAll(/href="(\/[^"#?]*)/g)]
          .map((match) => match[1])
          .filter((ruta) => !/^\/(?:_astro|api|i18n)\//.test(ruta))
          // El sitemap lo genera el build: en `astro dev` no existe como archivo.
          .filter((ruta) => !/^\/sitemap.*\.xml$/.test(ruta)),
      ),
    ];
    expect(rutas.length).toBeGreaterThan(10);

    const rotas: string[] = [];
    for (const ruta of rutas) {
      const response = await request.get(ruta);
      if (response.status() >= 400) rotas.push(`${ruta} → ${response.status()}`);
    }
    expect(rotas).toEqual([]);
  });

  test('rss.xml se sirve como XML', async ({ request }) => {
    const response = await request.get('/rss.xml');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/xml/);
  });
});

test.describe('muestra de webs de clientes', () => {
  const SLUGS = ['1111-coffee-and-bakery', 'a-jalar', 'bquarters', 'bodega-la-fuente', 'sergiocruzchacon'];

  for (const slug of SLUGS) {
    test(`/${slug}/ se sirve como parte de sur-digital.com`, async ({ request }) => {
      const response = await request.get(`/${slug}/`);
      expect(response.status()).toBe(200);
      expect(response.headers()['x-robots-tag']).toBeUndefined();

      const html = await response.text();
      const canonical = canonicalDe(html);
      expect(canonical).toBe(`${SITE}/${slug}/`);

      const og = html.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)/i)?.[1];
      expect(og).toBe(canonical);
    });
  }

  test('los assets de una web de cliente se sirven por el proxy', async ({ request }) => {
    const page = await request.get('/1111-coffee-and-bakery/');
    const html = await page.text();

    const asset = html.match(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)/i)?.[1];
    if (!asset) return; // la web puede llevar el CSS en línea

    const response = await request.get(asset);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/text\/css/);
  });
});

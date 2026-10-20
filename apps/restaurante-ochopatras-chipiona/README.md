# Restaurante OchoPatas Chipiona

Web de una página para **Restaurante OchoPatas Chipiona** (P.º Costa de la Luz, 71 · 11550 Chipiona, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la carta, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (dirección, teléfono, horario de 12:00 a 18:00 y de 20:30 a 24:00 todos los días, 4,0★ con 276 reseñas, accesibilidad y descripción) vienen de la ficha pública de Google Maps del restaurante. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs` y se optimizaron a WebP en varios anchos durante el build.

## Comandos

```bash
bun install
bunx turbo run build --filter=restaurante-ochopatras-chipiona
cd apps/restaurante-ochopatras-chipiona && bunx astro preview --port 4333
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://restaurante-ochopatras-chipiona.vercel.app` si se publica en otro.

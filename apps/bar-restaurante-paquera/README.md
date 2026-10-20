# Bar Restaurante Paquera

Web de una página para **Bar Restaurante Paquera** (Cam. de San Jerónimo, 11 · 11540 Sanlúcar de Barrameda, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (dirección, teléfono, horario, 4,2★ con 328 reseñas, accesibilidad y descripción) vienen de la ficha pública de Google Maps del restaurante. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs` y se optimizaron a WebP en varios anchos durante el build.

## Comandos

```bash
bun install
bunx turbo run build --filter=bar-restaurante-paquera
cd apps/bar-restaurante-paquera && bunx astro preview --port 4332
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://bar-restaurante-paquera.vercel.app` si se publica en otro.

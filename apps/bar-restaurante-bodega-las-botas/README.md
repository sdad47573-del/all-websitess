# Bar-Restaurante Bodega «Las Botas»

Web de una página para **Bar-Restaurante Bodega «Las Botas»** (C. Santo Domingo, 13 · 11402 Jerez de la Frontera, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la barra, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (dirección, teléfono, categorías restaurante andaluz/bar/bar de tapas, horario con domingo cerrado, 4,3★ con 411 reseñas y accesibilidad) vienen de la ficha pública de Google Maps. Los platos citados (tortillas, papas con cabrales, queso curado) salen de sus reseñas; la ficha no publica descripción ni carta, así que no se inventan textos ni precios. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`.

## Comandos

```bash
bun install
bunx turbo run build --filter=bar-restaurante-bodega-las-botas
cd apps/bar-restaurante-bodega-las-botas && bunx astro preview --port 4338
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://bar-restaurante-bodega-las-botas.vercel.app` si se publica en otro.

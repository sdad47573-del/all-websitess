# Mesón La Posada

Web de una página para **Mesón La Posada** (C. Alcalde Ginés Belda, 2 · 30620 Fortuna, Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio vienen de la ficha pública de Google Maps (octubre de 2026): Mesón La Posada, C. Alcalde Ginés Belda, 2, 30620 Fortuna; cocina española y bar; teléfono 968 68 63 70; de lunes a jueves y domingo de 9:00 a 16:00, viernes y sábado de 9:00 a 16:00 y de 19:30 a 0:30; 4,6★ con 315 reseñas; acceso, aseo y asientos adaptados, sin aparcamiento adaptado. Las especialidades —carne a la brasa, paellas, menú del día y almuerzos— proceden de la página del propio mesón, y el pulpo y el tartar de las reseñas públicas. La carta y los precios no se publican sin confirmar. Las 10 fotos se descargaron de la ficha de Google con `scripts/fetch-maps-photos.mjs` y se usan en hero, casa y galería.

## Comandos

```bash
bun install
bunx turbo run build --filter=meson-la-posada
cd apps/meson-la-posada && bunx astro preview --port 4400
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Confirmar el horario de festivos y la disponibilidad del menú.
- Sustituir el dominio provisional `https://meson-la-posada.vercel.app` si se publica en otro.

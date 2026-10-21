# Dcuatro

Web de una página para **Dcuatro** (C. Junterones, 4 · 30008 Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (C. Junterones, 4, 30008 Murcia; teléfono 676 70 09 55; restaurante de cocina española y mediterránea; de lunes a viernes de 10:00 a 17:00, sábado de 11:30 a 17:00 y domingo cerrado; 4,5★ con 411 reseñas; acceso, aseo y asientos adaptados, sin aparcamiento adaptado) vienen de la ficha pública de Google Maps. La carta, el menú y los precios no están publicados, así que no se inventan importes; las reseñas sí se citan. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`; se descartó una con clientes identificables.

## Comandos

```bash
bun install
bunx turbo run build --filter=dcuatro
cd apps/dcuatro && bunx astro preview --port 4370
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://dcuatro.vercel.app` si se publica en otro.

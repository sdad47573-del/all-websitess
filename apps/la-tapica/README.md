# La Tapica

Web de una página para **La Tapica Restaurante, Carmen & Francisco** (C. Pérez Urruti, 7, Bajo · 30110 Churra, Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (C. Pérez Urruti, 7, Bajo, 30110 Churra, Murcia; teléfono 638 98 41 98; cocina contemporánea europea; de martes a domingo de 13:00 a 17:00 y lunes cerrado; 4,5★ con 418 reseñas; acceso, aseo, asientos y aparcamiento adaptados) vienen de la ficha pública de Google Maps. La descripción del propietario —45 años de profesionalidad, la cocina, la calidad y el servicio, y la recomendación de reservar— se cita sin inventar carta ni precios. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs` y se usan en el hero, la casa y la galería.

## Comandos

```bash
bun install
bunx turbo run build --filter=la-tapica
cd apps/la-tapica && bunx astro preview --port 4380
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://la-tapica.vercel.app` si se publica en otro.

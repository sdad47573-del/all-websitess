# Venta El Raspa

Web de una página para **Venta El Raspa** (C. Central, 50 · 11549 La Algaida, Sanlúcar de Barrameda, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (dirección, teléfono, horario de 10:00 a 24:00 todos los días, 4,0★ con 756 reseñas y accesibilidad) vienen de la ficha pública de Google Maps de la venta. Los platos citados (camarones al ajillo con huevo frito, pato en salsa) salen de sus reseñas; la ficha no publica descripción ni carta, así que no se inventan textos ni precios. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`.

## Comandos

```bash
bun install
bunx turbo run build --filter=venta-el-raspa
cd apps/venta-el-raspa && bunx astro preview --port 4336
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://venta-el-raspa.vercel.app` si se publica en otro.

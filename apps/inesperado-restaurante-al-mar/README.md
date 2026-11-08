# Inesperado Restaurante al Mar

Web de una página para **Inesperado Restaurante al Mar** (C. Director Julián Cerdán, 24 · 11540 Sanlúcar de Barrameda, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (dirección, teléfono, categorías restaurante/chiringuito, horario de 11:00 a 21:30 todos los días, 3,9★ con 1.253 reseñas y accesibilidad) vienen de la ficha pública de Google Maps. La descripción de la casa (desayunos, comida, chill out, cena, ingredientes frescos, vinos) es la publicada por el titular. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`.

## Comandos

```bash
bun install
bunx turbo run build --filter=inesperado-restaurante-al-mar
cd apps/inesperado-restaurante-al-mar && bunx astro preview --port 4337
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://inesperado-restaurante-al-mar.vercel.app` si se publica en otro.

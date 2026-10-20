# Restaurante Mar Ali

Web de una página para **Restaurante Mar Ali** (C. Comandante Paz Varela, 1 · 11405 Jerez de la Frontera, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (dirección, teléfono, cocina filipina/china/asiática, horario con martes cerrado, 4,6★ con 242 reseñas y accesibilidad) vienen de la ficha pública de Google Maps del restaurante. Los platos citados salen de sus reseñas; la ficha no publica descripción ni carta, así que no se inventan textos ni precios. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`.

## Comandos

```bash
bun install
bunx turbo run build --filter=restaurante-mar-ali
cd apps/restaurante-mar-ali && bunx astro preview --port 4334
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://restaurante-mar-ali.vercel.app` si se publica en otro.

# Restaurante Paco

Web de una página para **Restaurante Paco** (Carril Palmeral, 1 · Santa Cruz · 30162 Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la mesa y el salón, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio vienen de la ficha pública de Google Maps (octubre de 2026): Restaurante Paco, Carril Palmeral, 1, 30162 Santa Cruz; teléfono 968 81 24 70; cocina española y salón de celebraciones; de 10:00 a 17:00 los lunes, martes, miércoles, viernes, sábados y domingos, cerrado los jueves, y cenas los viernes (20:00–23:30) y sábados (20:00–23:00); 4,6★ con 156 reseñas; acceso, aparcamiento, aseo y asientos adaptados. La ficha de turismo de la Región de Murcia recoge también la dirección de Calle Mayor, 197, en la misma localidad. La carta y los precios no se publican sin confirmar.

Se descargaron 10 fotos de la ficha de Google con `scripts/fetch-maps-photos.mjs`. Se usan 8; se descartaron dos imágenes de banquetes con clientes identificables.

## Comandos

```bash
bun install
bunx turbo run build --filter=restaurante-paco
cd apps/restaurante-paco && bunx astro preview --port 4410
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Confirmar la relación entre las direcciones de Carril Palmeral y Calle Mayor.
- Sustituir el dominio provisional `https://restaurante-paco.vercel.app` si se publica en otro.

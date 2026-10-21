# Restaurante Giovanni

Web de una página para **Restaurante Giovanni** (C. Pintor Sorolla, 28 · 03160 Almoradí, Alicante), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (C. Pintor Sorolla, 28, 03160 Almoradí; teléfono 966 78 21 34; restaurante italiano y mediterráneo; de martes a domingo de 12:00 a 16:00, cenas viernes y sábado de 19:30 a 23:15, lunes cerrado; 4,8★ con 684 reseñas; acceso, aseo y asientos adaptados) vienen de la ficha pública de Google Maps. La ficha no publica descripción ni carta, así que no se inventan platos ni precios; las reseñas sí se citan (pasta, raciones y trato). Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`.

## Comandos

```bash
bun install
bunx turbo run build --filter=restaurante-giovanni
cd apps/restaurante-giovanni && bunx astro preview --port 4350
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://restaurante-giovanni.vercel.app` si se publica en otro.

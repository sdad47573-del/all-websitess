# Santa María

Web de una página para **Restaurante Santa María** (C. Sodales, 18 · Polígono Industrial · 30620 Fortuna, Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio vienen de la ficha pública de Google Maps (octubre de 2026): Restaurante Santa María, RM-423, 30620 Fortuna; cocina española; de lunes a viernes de 7:15 a 17:00, sábado de 8:00 a 13:00 y domingo cerrado; 4,5★ con 127 reseñas; acceso, aparcamiento, aseo y asientos adaptados. El teléfono (968 68 61 22), la dirección postal (C/ Sodales, 18) y las especialidades —carne a la piedra, solomillo a la pimienta verde, pata de cordero y cabrito a la murciana— se contrastaron con La Guía W y Cheque Restaurante. La carta y los precios no se publican sin confirmar. Las 10 fotos se descargaron de la ficha de Google con `scripts/fetch-maps-photos.mjs` y se usan en hero, casa y galería.

## Comandos

```bash
bun install
bunx turbo run build --filter=santa-maria
cd apps/santa-maria && bunx astro preview --port 4390
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Confirmar que el teléfono de las guías locales sigue activo.
- Sustituir el dominio provisional `https://santa-maria.vercel.app` si se publica en otro.
